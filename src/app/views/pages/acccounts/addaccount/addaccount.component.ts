//@ts-nocheck
import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import { v4 as uuidv4 } from "uuid";
import swal from "sweetalert";
import { AddEditData, UtilityService } from "../../users/utility.service";
import { ApiDataService } from "../../users/api-data.service";
import { Router } from "@angular/router";
import { AccdetailsService } from "../../accdetails.service";
import { environment } from "src/environments/environment";
import * as CryptoJS from 'crypto-js';
@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit, AddEditData {
  // step 1 : Assign section variable correctly
  // Step 2 : If EditMode validate and Bind Html input to this object using template driven forms (2-way Binding ([ngModel]))
  // Step 3 : If any Binary Data is uploaded add it to Binary Array
  // Step 4 : on Submit validate schema to be sent-->if valid upload Binary Array to S3 ,upon succes upload Form Data
  // Step 6 : Reset State of form after submit
  // CamelCase for naming anything
  // select this appropriately
  section = this.utility.apiData.userAccounts;
  imageSrc: any;
  object: any;
  isEditMode = false;
  isUploadingData = false;
  isLoadingData = false;
  binaryFiles = [];
  today = new Date();
  isEtr = false;
  constructor(
    private utility: UtilityService,
    private dataService: ApiDataService,
    private router: Router,
    private usr: AccdetailsService
  ) { }
  @ViewChild("mainForm", { static: false }) mainForm: NgForm;
  @ViewChild("subForm", { static: false }) subForm: NgForm;
  ngOnInit() {
    this.resetForm();
    this.hasData();
  }
  resetForm() {
    this.isUploadingData = false;
    this.isLoadingData = false;
    this.isEditMode = false;
    // change
    this.object = JSON.parse(JSON.stringify(this.section.object));
    this.object.isEdit = true;
    this.imageSrc = null;
  }
  loadData(id) {
    //Get Form Data via API
    this.dataService.getData(this.section.ApiUrl, id, true).subscribe(
      (Response) => {
        if (Response) Response = JSON.parse(Response.toString());
        console.log(Response);
        if (!this.utility.dovValidateSchema.validate(Response, this.section.schema).valid) {
          swal("No data exists");
          this.router.navigate(['/auth/login']);
        }
        Object.assign(this.object, Response);
        if (this.object.imageSrc) this.imageSrc = this.section.bucketUrl + this.object.imageSrc;
        this.isLoadingData = false;
      },
      (error) => {
        swal("No data exists");
        this.router.navigate(['/auth/login']);
      });
  }
  hasData() {
    if (this.usr.getUserDetails().emailAddress) {
      this.isLoadingData = true;
      this.isEditMode = true;
      this.loadData(this.usr.getUserDetails().emailAddress);
    } else {
      swal("Invalid Member selected");
      this.router.navigate(['/auth/login']);
    }
  }
  uploadBinaryData() {
    this.object.imageSrc = ""; //only in cases where there is singular binding
    let requests = this.binaryFiles.map((object) => {
      return this.utility.uploadBinaryData(object["name"], object["binaryData"], this.section.bucket);
    });
    Promise.all(requests)
      .then((responses) => {
        this.object.imageSrc = responses[0]["name"];
        this.uploadFormData();
      })
      .catch((error) => {
        this.isUploadingData = false;
      });
  }
  updateStorage() {
    console.log(this.object);
    let usr = this.usr.getUserDetails();
    usr.accountfirstName = this.object.accountfirstName;
    usr.accountlastName = this.object.accountlastName;
    usr.dob = this.object.dob;
    usr.address = this.object.address;
    usr.clinicName = this.object.clinicName;
    usr.imageSrc = this.object.imageSrc;
    usr.phoneNumber = this.object.phoneNumber;
    usr.forwards = this.object.forwards;
    let encrypt = CryptoJS.AES.encrypt(JSON.stringify(usr), environment.decryptKey).toString();
    sessionStorage.setItem('usr', encrypt);
    // window.location.reload();
  }
  uploadFormData() {
    console.log(this.object);
    //post request here,both add & update are sent as post
    this.dataService
      .putData(this.section.ApiUrl, JSON.stringify(this.object))
      .subscribe((Response) => {
        this.isEditMode ? swal("Updated succesfully") : swal("Added succesfully");
        this.updateStorage()
        this.isUploadingData = false;
      }, (error) => {
        swal("Failed to process request,please try again");
        this.isUploadingData = false;
      });
  }
  loadBinaryFile(event) {
    if (event.target.files.length > 0) {
      //reset binaryFiles array to this image --> S3 allows to directly upload file object or Blob data,for simplicity here file object is used
      this.binaryFiles = [
        { name: uuidv4(), binaryData: event.target.files[0] },
      ];
      console.log(this.binaryFiles);
      //display selected file in image tag
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]); //initiates converting file to blob
      reader.onload = (e) => (this.imageSrc = reader.result); // call back after file is converted to Blob
    }
  }
  onSubmit() {
    if (this.mainForm.invalid) {
      this.mainForm.form.markAllAsTouched();
      swal("Enter values properly");
      return false;
    }
    this.isUploadingData = true;
    if (this.binaryFiles.length > 0) {
      this.uploadBinaryData();
    } else {
      this.uploadFormData();
    }
  }
  updatePassword(opass, npass, cpass) {
    if (this.subForm.invalid || (npass != cpass)) {
      this.mainForm.form.markAllAsTouched();
      swal("Enter values properly");
      return false;
    }
    this.isUploadingData = true;
    let obj = {
      'emailAddress': this.object.emailAddress,
      "password": npass,
      "oldPassword": opass
    }
    this.dataService
      .putData(this.section.ApiUrl, JSON.stringify(obj))
      .subscribe((Response) => {
        ;
        swal("Password updated succesfully");
        this.subForm.reset();
        this.isUploadingData = false;
      }, (error) => {
        if (error.status === 428)
          swal('Wrong Password');
        else
          swal("Failed to process request,please try again");
        this.isUploadingData = false;
      });
  }
  mails(value, email: HTMLInputElement, isAdd) {
    if (isAdd) {
      if (!email.validity.valid) {
        swal('Invalid E-Mail Address');
        return;
      }
      this.object.forwards.push(value);
      email.value = "";
    } else {
      this.object.forwards = this.object.forwards.filter(value => value !== value)
    }
  }
}
