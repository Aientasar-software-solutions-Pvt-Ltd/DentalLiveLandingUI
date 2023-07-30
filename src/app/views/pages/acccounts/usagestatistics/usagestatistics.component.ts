
import { Component, OnInit } from '@angular/core';
import { AccdetailsService } from '../../accdetails.service';
import { ApiDataService } from '../../users/api-data.service';
import { UtilityService } from '../../users/utility.service';
import prettyBytes from 'pretty-bytes';
@Component({
  selector: 'app-usagestatistics',
  templateUrl: './usagestatistics.component.html',
  styleUrls: ['./usagestatistics.component.css']
})
export class UsagestatisticsComponent implements OnInit {

  constructor(private dataService: ApiDataService, public utility: UtilityService, private usr: AccdetailsService) { }
  isLoadingData = false;
  object: any;
  itemsPerPage = 10;
  pageNumber = 0;
  usersAllocated = 0;
  user = this.usr.getUserDetails()['emailAddress']

  loadData() {
    // Get Form Data via API
    this.dataService.getallData(this.utility.apiData.usage.ApiUrl + `?email=${this.user}&type=stats`, true)
      .subscribe(Response => {
        if (Response) Response = JSON.parse(Response.toString());
        console.log(Response)
        this.object = Response;
      }, error => {
      }, () => {
        this.isLoadingData = false;
      });
  }

  ngOnInit() {
    this.object = {
      "total": 0,
      "used": 0,
      "stats": []
    }
    this.isLoadingData = true;
    this.loadData();
  }

  counter(items: number) {
    return new Array(Math.ceil(items / this.itemsPerPage));
  }

  // helper function
  // tslint:disable-next-line:variable-name
  changePage(number: number) {
    this.pageNumber = number * this.itemsPerPage;
  }
  formatData(object) {
    let total = 0;
    if (object.used)
      total = object.used.meet + object.used.mail + object.used.planner;
    return prettyBytes(total);
  }
}

