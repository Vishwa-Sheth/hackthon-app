import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { NavigationService } from "src/app/services/navigation.service";
import { RestService } from "src/app/services/rest.service";
import { CustomerModel } from 'src/app/models/api.models';
import * as Constants from "src/app/constants/Constants";
import { eChannelConfig } from 'src/app/constants/configuration';

@Component({
  selector: 'app-left-pane',
  templateUrl: './left-pane.component.html',
  styleUrls: ['./left-pane.component.css']
})
export class LeftPaneComponent implements OnInit {
  @Output() onNavSelect = new EventEmitter<any>();
  @Input() navClass;

  flag: boolean = false;

  model: CustomerModel;

  name: string;
  mail: string;
  userImage: string;
  userId: string;

  constructor(private _navigationService: NavigationService,
    private _restService: RestService) {
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    this.BindUserProfile();
  }

  async BindUserProfile() {

    await this._restService.GetDashboardUserProfile("0")
      .then((res) => {
        if (res.success) {
          this.name = res.name;
          this.mail = res.emailId;

          const playload = JSON.parse(atob(eChannelConfig.AuthToken.split('.')[1]));
          this.userId = playload.unique_name;
          this.userImage = eChannelConfig.ProfileImageUrl + this.userId +'.jpeg';
        }
      })
      .catch((error) => {
        console.log("Error--> " + error);
      });
  }

  navLink() {
    this.onNavSelect.emit('true');
  }

  openPersonalDetails() {
    this.navLink();
    this._navigationService.setPage(Constants.PERSONAL_DETAILS);
    
  }

  openMyPolicies() {
    this.navLink();
    this._navigationService.setPage(Constants.MY_POLICIES);
  }

  openPayments() {
    this._navigationService.setPage(Constants.PAYMENTS);
  }

  openSavedQuote() {
    this.navLink();
    this._navigationService.setPage(Constants.SAVED_QUOTE);
  }


}
