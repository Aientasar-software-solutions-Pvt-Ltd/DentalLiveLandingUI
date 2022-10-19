import { AfterViewInit, Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';
import swal from 'sweetalert';
import { ApiDataService } from '../../users/api-data.service';
import { UtilityService } from '../../users/utility.service';
import { UtilityServicedev } from '../../../../utilitydev.service';
import { AccdetailsService } from '../../accdetails.service';
import { Router } from '@angular/router';
import { Cvfast } from '../../../../cvfast/cvfast.component';
import {encode} from 'html-entities';

@Component({
  selector: 'app-general-task-add',
  templateUrl: './general-task-add.component.html',
  styleUrls: ['./general-task-add.component.css']
})
export class GeneralTaskAddComponent implements OnInit {
	@ViewChild(Cvfast) cvfastval!: Cvfast;
	sending: boolean;
	public allMember: any[] = []
	public allMemberEmail: any[] = []
	public allMemberName: any[] = []
    selectedCity = '';
	public module = 'patient';
	minDate = new Date();
	minStartDate = new Date();
	
	defaultBindingsList = [
        { value: 1, label: 'Jhone Duo' },
        { value: 2, label: 'Danel Gray' },
        { value: 3, label: 'Pavilnys' }
    ];
	selectedMember: any;
	public isvalidDate = false;
	public isvalidRefereTo = false;
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
	  memberMail: '',
	  memberName: '',
	  milestoneId: '',
	}
	tabledata:any;
	milestoneIdadd:any;
	invitedata:any;
	
    constructor(private location: Location, private dataService: ApiDataService, private router: Router, private utility: UtilityService, private utilitydev: UtilityServicedev, private usr: AccdetailsService) { }

  back(): void {
    this.location.back()
  }
  
	ngOnInit(): void {
		this.minStartDate.setDate(this.minStartDate.getDate() - 1);
		this.selectedMember = this.defaultBindingsList[0];
		this.getCaseDetails();
		this.getAllMembers();
		this.milestoneIdadd = sessionStorage.getItem("milestoneId");
	}
	getuserdetailsall(userId, index) {
		let user = this.usr.getUserDetails(false);
		if(user)
		{
		let url = this.utility.apiData.userColleague.ApiUrl;
		if(userId != '')
		{
			url += "?emailAddress="+userId;
		}
		this.dataService.getallData(url, true).subscribe(Response => {
		if (Response)
		{
			let userData = JSON.parse(Response.toString());
			let avatar = ''
			if(userData.imageSrc != undefined)
			{
			avatar = 'https://dentallive-accounts.s3-us-west-2.amazonaws.com/'+userData.imageSrc;
			}
			else
			{
			avatar = 'assets/images/users.png';
			}
			let name = userData.accountfirstName+' '+userData.accountlastName;
			this.allMember[index].name = name;
			this.allMember[index].emailAddress = userData.emailAddress;
			this.allMember[index].avatar = avatar;
		}
		}, (error) => {
			if (error.status === 404)
			swal('No task found');
			else if (error.status === 403)
			swal('You are unauthorized to access the data');
			else if (error.status === 400)
			swal('Invalid data provided, please try again');
			else if (error.status === 401)
			swal('You are unauthorized to access the page');
			else if (error.status === 409)
			swal('Duplicate data entered');
			else if (error.status === 405)
			swal({
			text: 'Due to dependency data unable to complete operation'
			}).then(function() {
			window.location.reload();
			});
			else if (error.status === 500)
			swal('The server encountered an unexpected condition that prevented it from fulfilling the request');
			else
			swal('Oops something went wrong, please try again');
			return false;
		});
		}
	}
	getAllMembers() {
		let user = this.usr.getUserDetails(false);
		if(user)
		{
			this.sending = true;
			let url = this.utility.apiData.userCaseInvites.ApiUrl;
			let caseId = sessionStorage.getItem("caseId");
			if(caseId != '')
			{
				url += "?caseId="+caseId;
			}
			url += "&presentStatus="+1;
			this.dataService.getallData(url, true)
			.subscribe(Response => {
				if (Response)
				{
					let GetAllData = JSON.parse(Response.toString());
					GetAllData.sort((a, b) => (a.dateUpdated > b.dateUpdated) ? -1 : 1);
					this.allMember = Array();
					for(var k = 0; k < GetAllData.length; k++)
					{
						this.allMember.push({
						  id: k,
						  avatar: '',
						  emailAddress: '',
						  name: ''
						});
						this.getuserdetailsall(GetAllData[k].invitedUserMail,k);
					}
					this.sending = false;
				}
			}, error => {
				if (error.status === 404)
				swal('No task found');
				else if (error.status === 403)
				swal('You are unauthorized to access the data');
				else if (error.status === 400)
				swal('Invalid data provided, please try again');
				else if (error.status === 401)
				swal('You are unauthorized to access the page');
				else if (error.status === 409)
				swal('Duplicate data entered');
				else if (error.status === 405)
				swal({
				text: 'Due to dependency data unable to complete operation'
				}).then(function() {
				window.location.reload();
				});
				else if (error.status === 500)
				swal('The server encountered an unexpected condition that prevented it from fulfilling the request');
				else
				swal('Oops something went wrong, please try again');
			});
			
		}
	}
	selectEvent(item: any) {
		this.allMemberEmail = Array();
		this.allMemberName = Array();
		for(var k = 0; k < item.length; k++)
		{
			this.allMemberEmail.push(item[k].emailAddress);
			this.allMemberName.push(item[k].name);
			this.isvalidRefereTo = false;
		}
	}
	onSubmitTask(form: NgForm){
		//alert(JSON.stringify(form.value));
		if(this.allMemberEmail.length == 0)
		{
			this.isvalidRefereTo =true;
		}
		else
		{
			this.isvalidRefereTo =false;
		}
		if(Date.parse(form.value.startdate) >= Date.parse(form.value.dueDatetime))
		{
			this.isvalidDate =true;
		}
		else
		{
			this.isvalidDate =false;
		}
		if ((form.invalid) || (this.isvalidDate == true) || (this.isvalidRefereTo == true)) {
		  swal("Please enter values for the mandatory fields");
		  form.form.markAllAsTouched();
		  return;
		}
		this.sending = true;
		this.onGetdateData(form.value);
	}
	onGetdateData(data: any)
	{
		this.jsonObj['caseId'] = data.caseid;
		this.jsonObj['patientId'] = data.patientid;
		this.jsonObj['patientName'] = data.patientname;
		this.jsonObj['title'] = this.removeHTML(data.title);
		if((this.cvfastval.returnCvfast().text != '') || (this.cvfastval.returnCvfast().links.length > 0))
		{
		this.jsonObj['description'] = this.cvfastval.returnCvfast();
		}
		this.jsonObj['startdate'] = Date.parse(data.startdate);
		this.jsonObj['duedate'] = Date.parse(data.dueDatetime);
		this.jsonObj['presentStatus'] = Number(data.presentStatus);
		this.jsonObj['reminder'] = Number(data.reminder);
		let meberEmail = this.allMemberEmail.join(', ');
		let meberName = this.allMemberName.join(', ');
		this.jsonObj['memberMail'] = meberEmail;
		this.jsonObj['memberName'] = meberName;
		this.jsonObj['milestoneId'] = this.milestoneIdadd;
		
		this.cvfastval.processFiles(this.utility.apiData.userTasks.ApiUrl, this.jsonObj, true, 'Task added successfully', '/milestones/milestone-details/'+this.milestoneIdadd, 'post', '','description','','Task title already exists.').then(
		(value) => {
		this.sending = false;
		},
		(error) => {
		this.sending = false;
		});
	}
	
	getCaseDetails() {
		let url = this.utility.apiData.userCases.ApiUrl;
		let caseId = sessionStorage.getItem("caseId");
		if(caseId != '')
		{
			url += "?caseId="+caseId;
		}
		this.dataService.getallData(url, true)
		.subscribe(Response => {
			if (Response)
			{
				this.tabledata = JSON.parse(Response.toString());
				//alert(JSON.stringify(this.tabledata));
			}
		}, error => {
			if (error.status === 404)
			swal('No task found');
			else if (error.status === 403)
			swal('You are unauthorized to access the data');
			else if (error.status === 400)
			swal('Invalid data provided, please try again');
			else if (error.status === 401)
			swal('You are unauthorized to access the page');
			else if (error.status === 409)
			swal('Duplicate data entered');
			else if (error.status === 405)
			swal({
			text: 'Due to dependency data unable to complete operation'
			}).then(function() {
			window.location.reload();
			});
			else if (error.status === 500)
			swal('The server encountered an unexpected condition that prevented it from fulfilling the request');
			else
			swal('Oops something went wrong, please try again');
		});
	}
	
	removeHTML(str){ 
		if((str != '') && (str != 'undefined') && (str != undefined))
		{
		var tmp = document.createElement("DIV");
		tmp.innerHTML = str;
		return tmp.textContent || tmp.innerText || "";
		}
		else
		{
		return "";
		}
	}

}