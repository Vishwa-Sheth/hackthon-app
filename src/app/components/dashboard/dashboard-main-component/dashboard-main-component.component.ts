import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { NavigationService } from "src/app/services/navigation.service";
import { RestService } from "src/app/services/rest.service";
import { Subscription } from 'rxjs';
import * as Constants from "src/app/constants/Constants";

@Component({
  selector: 'app-dashboard-main-component',
  templateUrl: './dashboard-main-component.component.html',
  styleUrls: ['./dashboard-main-component.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardMainComponentComponent implements OnInit {

  page: string;

  subscription: Subscription;

  pincodeValue: string;

  navFlag: boolean = false;

  constructor(private _navigationService: NavigationService,
    private _restService: RestService) {
    this._navigationService.setPage(Constants.PERSONAL_DETAILS);
    this.subscription = this._navigationService.page.subscribe((value) => {
      this.page = value;
    });
  }

  ngOnInit(): void {
    this.intialize();
  }

  get isPersonalDetails() {
    return (this.page == Constants.PERSONAL_DETAILS);
  }

  get isMyPolicy() {
    return (this.page == Constants.MY_POLICIES);
  }

  get isPayment() {
    return (this.page == Constants.PAYMENTS);
  }

  get isSavedQuote() {
    return (this.page == Constants.SAVED_QUOTE);
  }

  intialize() {
    
  }

  openNav() {
     this.navFlag = !this.navFlag;
     
  }

  showDetails(value) {
    if (value) {
      this.navFlag = false;
    }
  }

}
