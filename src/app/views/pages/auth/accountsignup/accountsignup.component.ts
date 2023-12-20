import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SocialAuthService } from "@abacritt/angularx-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "@abacritt/angularx-social-login";
import { AccountService } from '../../account.service';
import { PermissionGuardService } from '../../permission-guard.service';
import { ApiDataService } from '../../users/api-data.service';
import { AccdetailsService } from '../../accdetails.service';
import { UtilityService } from '../../users/utility.service';
import swal from 'sweetalert';


@Component({
  selector: 'app-accountsignup',
  templateUrl: './accountsignup.component.html',
  styleUrls: ['./accountsignup.component.css']
})
export class AccountsignupComponent implements OnInit {
  sending: boolean;

  constructor(private http: HttpClient, private router: Router, private accService: AccountService, private authServiceSocial: SocialAuthService, private route: ActivatedRoute, private utility: UtilityService, private permAuth: PermissionGuardService, private dataService: ApiDataService, private usr: AccdetailsService) { }

  package = null;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      if (params.get('package') && params.get('package') != "") {
        this.package = params.get('package');
      }
    });
      sessionStorage.setItem("loggedOutUser", sessionStorage.getItem("usr"))
    sessionStorage.removeItem("usr");
    this.sending = false;
  }

  // temp
  async createAccounts() {
    let jsonURL = '/assets/users1.json';
    let json = await this.http.get(jsonURL).toPromise();
    let reejctedEmails = []
    let i = 0;
    await json['data'].forEach(async element => {
      i = i + 1;
      // if (i > 5) return;
      let tempJson = { ...this.utility.apiData.userAccounts.object };
      tempJson.accountfirstName = element?.name;
      tempJson.accountlastName = "";
      tempJson['sno'] = element.sno
      tempJson['password'] = element.pass
      tempJson.emailAddress = element?.email;
      tempJson.address = element.street ?? "" + " " + element.city ?? "" + " " + element.state ?? "" + " " + element.country ?? "" + " " + element.zip ?? ""
      tempJson.clinicName = element?.prac;
      tempJson.phoneNumber = element?.phno;
      tempJson.education = element?.qual;
      tempJson.country = element?.country
      tempJson.city = element?.city;;
      tempJson['cid'] = element?.cid;
      tempJson['sid'] = element?.sid;
      tempJson['university'] = element?.university;
      tempJson['url'] = this.utility.accountValidateURL;
      tempJson['isOld'] = true;

      Object.keys(tempJson).forEach(function (key) {
        if (tempJson[key] === null) {
          tempJson[key] = "";
        }
      })
      try {
        let Response = await this.dataService.postData(this.utility.apiData.userAccounts.ApiUrl, JSON.stringify(tempJson), true).toPromise();
        console.log(i);
      } catch (error) {
        console.log(error['status'], tempJson.emailAddress)
      }
    });
    console.log(reejctedEmails)
  }

  onSubmit(form: NgForm) {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return;
    }
    if (form.value.emailAddress && form.value.emailAddress.toString().includes("+")) {
      swal("plus(+) symbol is not allowed in email address due to security reasons,please try another Email Address")
      return
    }
    this.sending = true;
    let json: JSON = form.value;
    json['url'] = this.utility.accountValidateURL;
    this.dataService.postData(this.utility.apiData.userAccounts.ApiUrl, JSON.stringify(json), true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        this.sending = false;
        this.router.navigate(['/auth/dovalidate', json['emailAddress']]);
      }, error => {
        this.sending = false;
        if (error.status == 409)
          sweetAlert("The E-Mail Already Exists, Please Login To Continue");
        else
          sweetAlert("Unable to signup,please try again");
      })
  }

  signInWithGoogle(): void {
    const googleLoginOptions = {
      scope: 'profile email'
    }; // https://developers.google.com/api-client-library/javascript/reference/referencedocs#gapiauth2clientconfig
    this.authServiceSocial.signIn(GoogleLoginProvider.PROVIDER_ID, googleLoginOptions).then((user) => {
      this.accService.SocailLogin(user);
    });
  }

  // signInWithFB(): void {
  //   const fbLoginOptions = {
  //     scope: 'email,public_profile',
  //     return_scopes: true,
  //     enable_profile_selector: true
  //   }; // https://developers.facebook.com/docs/reference/javascript/FB.login/v2.11
  //   this.authServiceSocial.signIn(FacebookLoginProvider.PROVIDER_ID, fbLoginOptions).then((user) => {
  //     this.accService.SocailLogin(user);
  //   });
  // }
}


