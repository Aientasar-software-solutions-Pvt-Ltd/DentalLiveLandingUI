
import { Component, OnInit } from "@angular/core";

import sortArray from 'sort-array';
import { AccdetailsService } from "../../accdetails.service";
import { ApiDataService } from "../../users/api-data.service";
import { ListData, UtilityService } from "../../users/utility.service";

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css']
})
export class ContactlistComponent implements OnInit, ListData {
  constructor(
    private dataService: ApiDataService,
    private utility: UtilityService,
    private usr: AccdetailsService
  ) { }

  isLoadingData = false;
  objectList: any;
  pristineData: any;
  itemsPerPage = 10;
  pageNumber = 0;
  // select this appropriately
  object = this.utility.apiData.contacts;
  private user = this.usr.getUserDetails()['emailAddress'];

  loadData() {
    //Get Form Data via API
    this.dataService.getallData(this.object.ApiUrl + `?did=${this.user}`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        this.objectList = Response;
        this.pristineData = Response;
        this.isLoadingData = false;
      }, (error) => {
        this.isLoadingData = false;
      });
  }

  ngOnInit() {
    this.isLoadingData = true;
    this.objectList = [];
    this.loadData();
  }

  filterData(filterValue: string) {
    if (!filterValue) {
      this.objectList = this.pristineData;
      return;
    }
    this.objectList = this.pristineData.filter((contact) => {
      if (contact.firstName || contact.lastName || contact.email)
        return (
          contact.firstName.toLowerCase().includes(filterValue) || contact.lastName.toLowerCase().includes(filterValue) || contact.email.toLowerCase().includes(filterValue)
        );
    });
  }

  sortBoolean: any = {};
  sortData(sortValue) {
    this.sortBoolean[sortValue] = this.sortBoolean[sortValue] ? false : true;
    sortArray(this.objectList, { by: sortValue, order: this.sortBoolean[sortValue] ? 'desc' : 'asc' });
  }

  counter(items: number) {
    return new Array(Math.round(items / this.itemsPerPage));
  }

  getCount() {
    return parseInt(this.itemsPerPage.toString()) + parseInt(this.pageNumber.toString());
  }

  // helper function
  changePage(number: number) {
    this.pageNumber = number * this.itemsPerPage;
  }
}
