//@ts-nocheck
import { Component, OnInit } from '@angular/core';
import { HttpClient, } from "@angular/common/http";
import { BehaviorSubject } from "rxjs";
import swal from 'sweetalert';
import { UtilityService } from '../../users/utility.service';
import { ApiDataService } from '../../users/api-data.service';
import { PermissionGuardService } from '../../permission-guard.service';
import { AccdetailsService } from '../../accdetails.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-accountlogout',
  templateUrl: './accountlogout.component.html',
  styleUrls: ['./accountlogout.component.css']
})
export class AccountlogoutComponent implements OnInit {

	constructor(private http: HttpClient, private router: Router, private permAuth: PermissionGuardService, private dataService: ApiDataService, private utility: UtilityService, private usr: AccdetailsService) {
	}

	ngOnInit() {
		this.logout();
	}
	logout()
	{
		let loginResourceId = localStorage.getItem('loginResourceId');
		let user = this.usr.getUserDetails(false);
		const json1: JSON = {};
		json1['dentalId'] = user.dentalId;
		json1['emailAddress'] = loginResourceId;
		json1['lastLoggedOut'] = Date.now();
		//alert(JSON.stringify(json1));
		this.dataService.putData(this.utility.apiData.userLogin.ApiUrl, JSON.stringify(json1), true)
		.subscribe(Response => {
		  localStorage.removeItem('loginResourceId');
		  localStorage.removeItem('usr');
		  if (Response) Response = JSON.parse(Response.toString());
		  this.router.navigate(['/auth/login']);
		  if (!Response) {
			swal("Unable to save login time,please try again");
			return;
		  }
		}, error => {
		  if (error.status === 404)
			swal('E-Mail ID does not exists,please signup to continue');
		  else if (error.status === 403)
			swal('Account Disabled,contact Dental-Live');
		  else if (error.status === 400)
			swal('Wrong Password,please try again');
		  else if (error.status === 401)
			swal('Account Not Verified,Please activate the account from the Email sent to the Email address.');
		  else if (error.status === 428)
			swal(error.error);
		  else
		  swal('Unable to login, please try again');
		  this.router.navigate(['/dashboard']);
		});
	}
  
}

