//@ts-nocheck
import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { ApiDataService } from '../../users/api-data.service';
import { UtilityService } from '../../users/utility.service';
import { UtilityServicedev } from '../../../../utilitydev.service';
import { AccdetailsService } from '../../accdetails.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Cvfast } from '../../../../cvfast/cvfast.component';

import { OwlDateTimeIntl } from 'ng-pick-datetime';
import "@lottiefiles/lottie-player";
import {encode} from 'html-entities';
import {decode} from 'html-entities';

@Component({
  selector: 'app-milestone-edit',
  templateUrl: './milestone-edit.component.html',
  styleUrls: ['./milestone-edit.component.css']
})
export class MilestoneEditComponent implements OnInit {
  @ViewChild(Cvfast) cvfastval!: Cvfast;
	sending: boolean;
	public jsonObj = {
	  caseId: '',
	  patientId: '',
	  patientName: '',
	  title: '',
	  description: {},
	  startdate: 0,
	  duedate: 0,
	  presentStatus: 0,
	  reminder: 0,
	  milestoneId: '',
	}
	editdata:any;
	editedDate:any;
	editedTitle:any;
	editedstartDate:any;
	tabledata:any;
	patientId:any;
	caseId:any;
	public casesName = '';
	public patientName = '';
	public isvalidDate = false;
	
	getmilestoneId: any;
    constructor(private location: Location, private dataService: ApiDataService, private router: Router, private utility: UtilityService, private utilitydev: UtilityServicedev, private usr: AccdetailsService, private route: ActivatedRoute) {
		this.getmilestoneId = this.route.snapshot.paramMap.get('milestoneId');
	}
  
	back(): void {
		this.location.back()
	}
	
  ngOnInit(): void {
  this.getEditMilestone();
  }
	
	getEditMilestone() {
		this.editdata = '';
		this.sending = true;
		let url = this.utility.apiData.userMilestones.ApiUrl;
		let milestoneId = this.getmilestoneId;
		if(milestoneId != '')
		{
			url += "?milestoneId="+milestoneId;
		}
		this.dataService.getallData(url, true)
		.subscribe(Response => {
			if (Response)
			{
				
				this.editdata = JSON.parse(Response.toString());
				//alert(JSON.stringify(this.editdata));
				setTimeout(()=>{     
					this.setcvFast();
				}, 1000);
				this.editedDate = new Date(this.editdata.duedate);
				this.editedstartDate = new Date(this.editdata.startdate);
				this.getCaseDetails(this.editdata.caseId);
				this.editedTitle = decode(this.editdata.title);
				this.sending = false;
			}
		}, error => {
		  if (error.status === 404)
			swal.fire('E-Mail ID does not exists,please signup to continue');
		  else if (error.status === 403)
			swal.fire('Account Disabled,contact Dental-Live');
		  else if (error.status === 400)
			swal.fire('Wrong Password,please try again');
		  else if (error.status === 401)
			swal.fire('Account Not Verified,Please activate the account from the Email sent to the Email address.');
		  else if (error.status === 428)
			swal.fire(error.error);
		  else
			swal.fire('Unable to fetch the data, please try again');
		});
	}
	
	onSubmitMilestone(form: NgForm){
		if(Date.parse(form.value.startdate) >= Date.parse(form.value.dueDatetime))
		{
			this.isvalidDate =true;
		}
		else
		{
			this.isvalidDate =false;
		}
		if ((form.invalid) || (this.isvalidDate == true)) {
		  form.form.markAllAsTouched();
		  return;
		}
		this.sending = true;
		//alert(JSON.stringify(form.value));
		this.onGetdateData(form.value);
	}
	
	onGetdateData(data: any)
	{
		
		this.jsonObj['milestoneId'] = data.milestoneId;
		this.jsonObj['title'] = encode(data.title);
		if((this.cvfastval.returnCvfast().text != '') || (this.cvfastval.returnCvfast().links.length > 0))
		{
		this.jsonObj['description'] = this.cvfastval.returnCvfast();
		}
		//this.jsonObj['description'] = data.description;
		this.jsonObj['startdate'] = Date.parse(data.startdate);
		this.jsonObj['duedate'] = Date.parse(data.dueDatetime);
		this.jsonObj['presentStatus'] = Number(data.presentStatus);
		this.jsonObj['reminder'] = Number(data.reminder);
		this.jsonObj['caseId'] = this.caseId;
		this.jsonObj['patientId'] = this.patientId;
		this.jsonObj['patientName'] = this.patientName;
		
		//alert(JSON.stringify(this.cvfastval.returnCvfast()));
		//alert(JSON.stringify(this.jsonObj));
		const backurl = localStorage.getItem('backurl');
		
		this.cvfastval.processFiles(this.utility.apiData.userMilestones.ApiUrl, this.jsonObj, true, 'Milestone updated successfully', backurl, 'put','','description');
		
	}
	
	getCaseDetails(caseId) {
		let url = this.utility.apiData.userCases.ApiUrl;
		if(caseId != '')
		{
			url += "?caseId="+caseId;
			this.dataService.getallData(url, true)
			.subscribe(Response => {
				if (Response)
				{
					this.tabledata = JSON.parse(Response.toString());
					this.casesName = this.tabledata.title;
					this.patientName = this.tabledata.patientName;
					this.patientId = this.tabledata.patientId;
					this.caseId = this.tabledata.caseId;
					//alert(JSON.stringify(this.tabledata));
				}
			}, error => {
			  if (error.status === 404)
				swal.fire('E-Mail ID does not exists,please signup to continue');
			  else if (error.status === 403)
				swal.fire('Account Disabled,contact Dental-Live');
			  else if (error.status === 400)
				swal.fire('Wrong Password,please try again');
			  else if (error.status === 401)
				swal.fire('Account Not Verified,Please activate the account from the Email sent to the Email address.');
			  else if (error.status === 428)
				swal.fire(error.error);
			  else
				swal.fire('Unable to fetch the data, please try again');
			});
		}
	}
	setcvFast()
	{
		//alert(JSON.stringify(this.editdata.description));
		this.cvfastval.setCvfast(this.editdata.description);
	}
}