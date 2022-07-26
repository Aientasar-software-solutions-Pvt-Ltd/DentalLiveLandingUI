//@ts-nocheck
import { Injectable } from '@angular/core';
import { HttpClient, } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import { UtilityService } from './users/utility.service';
import { ApiDataService } from './users/api-data.service';
import { PermissionGuardService } from './permission-guard.service';
import { AccdetailsService } from './accdetails.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
export interface account {
  pk: string,
  sk: string,
  accountfirstName: string,
  accountlastName: string,
  emailAddress: string,
  imageSrc: string,
  phoneNumber: string,
  dob: string
}
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  //singleton package object shared across all the components
  sharedAccountData: BehaviorSubject<Array<account>> = new BehaviorSubject([]);
  putInvoice: string;
  getInvoice: string;
  constructor(private http: HttpClient, private router: Router, private permAuth: PermissionGuardService, private dataService: ApiDataService, private utility: UtilityService, private usr: AccdetailsService) {
    this.putInvoice = "https://7ktpuzg775.execute-api.us-west-2.amazonaws.com/default/putInvoice";//*
    this.getInvoice = "https://o4xnrsx427.execute-api.us-west-2.amazonaws.com/default/getInvoice";
  }
  login() {
    let user = this.usr.getUserDetails(false);
    swal.fire({ type: 'success', title: 'Login initiated...please wait...', 
            showConfirmButton: false,allowOutsideClick: false, timer: 2000 });
    let url = this.utility.apiData.usage.ApiUrl + `?email=${user.emailAddress}&type=permission`
    this.permAuth.isAdmin = true;
    if (user.Subuser) {
      url = this.utility.apiData.usage.ApiUrl + `?email=${user.emailAddress}&issub=true&subuserid=${user.Subuser.subUserID}&type=permission`;
      this.permAuth.isAdmin = false;
    }
    this.dataService.getallData(url, true).subscribe(Response => {
      if (Response) Response = JSON.parse(Response.toString());
      //swal.fire.close();
      this.permAuth.isPristine = false;
      this.permAuth.products = Response['products'];
      this.permAuth.permissions = Response['permissions'];
      this.router.navigate(['dashboard']);
    }, (error) => {
      swal.fire("Unable to login, please try again");
      return false;
    });
  }
  SocailLogin(user) {
    if (!user) return;
    swal.fire("Processing request...please wait...", {
      buttons: [false, false],
      closeOnClickOutside: false,
    });
    let json = {};
    json['accountfirstName'] = user.firstName ? user.firstName : "";
    json['accountlastName'] = user.lastName ? user.lastName : "";
    json['emailAddress'] = user.email ? user.email : "";
    json['isSocialLogin'] = true;
    this.dataService.postData(this.utility.apiData.userAccounts.ApiUrl, JSON.stringify(json), true)
      .subscribe(Response => {
        if (!Response) {
          swal.fire("Unable to login, please try again");
          return;
        }
        if (Response) Response = JSON.parse(Response.toString());
        this.login();
      }, (err) => {
        if (err.status === 403)
          swal.fire('Account Disabled,contact Dental-Live');
        else if (err.status === 428)
          swal.fire(err.error);
        else
          swal.fire("Unable to login, please try again");
      })
  }
  updateAccountData(message: any) {
    this.sharedAccountData.next(message)
  }
  putInvoiceData(data) {
    return this.http.post(this.putInvoice, data);
  }
  getInvoiceData(data) {
    return this.http.post(this.getInvoice, data);
  }
}
