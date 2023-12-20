import { Component, OnInit, HostListener } from '@angular/core';
import { AccdetailsService } from '../../pages/accdetails.service';
import * as $ from "jquery";
import { Router } from '@angular/router';
@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    classFlag = false;
    AccountName: string;
    AccountImg: any;
    imgSrc: any;
    isShowDropDown = false;
    constructor(private router: Router, public usr: AccdetailsService) { }
    @HostListener('window:resize', ['$event'])



    ngOnInit(): void {
        let user = this.usr.getUserDetails();
        this.AccountName = user.accountfirstName + ' ' + user.accountlastName;
        this.AccountImg = user.imageSrc;
        if (window.innerWidth <= 575) {
            this.classFlag = true;
        }
        else {
            this.classFlag = false;
        }
        if ((this.AccountImg != undefined) && (this.AccountImg != '') && (this.AccountImg != null)) {
            this.imgSrc = 'https://dentallive-accounts.s3-us-west-2.amazonaws.com/' + this.AccountImg;
        }
        else {
            this.imgSrc = "assets/images/users.png";
        }
    }
    collapse_menu(event: any) {
        $('.vertical_nav').toggleClass('vertical_nav__minify');
        $('.wrapper').toggleClass('wrapper__minify');
        if ($('.wrapper').hasClass('wrapper__minify')) {
            $('.vertical_nav').addClass('vertical_nav__minify');
        }
    }
    toggleMenu(event: any) {
        $('.vertical_nav').toggleClass('vertical_nav__opened');
        $('.wrapper').toggleClass('toggle-content');
        if ($('.wrapper').hasClass('toggle-content')) {
            $('.vertical_nav').addClass('vertical_nav__opened');
        }
    }

    onLogout() {
        sessionStorage.removeItem('isLoggedin');
        if (!sessionStorage.getItem('isLoggedin')) {
            this.router.navigate(['/auth/login']);
        }
    }

}
