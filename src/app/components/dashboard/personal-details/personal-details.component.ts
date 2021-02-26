import { Component, OnInit } from '@angular/core';
import { Validators } from "@angular/forms";
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { RestService } from "src/app/services/rest.service";
import { CustomerModel, ErrorCustomerUIModel, AddressModel } from 'src/app/models/api.models';

import * as Constants from "src/app/constants/Constants";
import { eChannelConfig } from 'src/app/constants/configuration';


@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.css']
})
export class PersonalDetailsComponent implements OnInit {

  personalDetailsForm: FormGroup;

  genderSelect: string = "male";

  focusMobile: boolean;
  focusAddress: boolean;
  focusPincode: boolean;
  focusCity: boolean;
  focusLandmark: boolean;
  focusPancard: boolean;

  invalidPincode: boolean;
  invalidPancard: boolean;
  initialPincode: number;
  initialCityName: string;

  editInfo: boolean = false;
  cityId: number;
  stateId: number;
  countryId: number;
  submitted: boolean = false;
  IsPopUpError: boolean = false;
  IsPopUpMessage: string;

  model: CustomerModel;
  userId: string;
  userImage: string;
  errorUIModel: ErrorCustomerUIModel;
  address: AddressModel;
  IsProfileUpdate: boolean = false;
  IsShowloader: boolean = false;
  CityStateresult: string[];
  cityDistrictName: "cityDistrictName";
  cityDistrictId: "cityDistrictId";
  IsAutoCompleteShow: boolean = false;

  minDate: Date;
  maxDate: Date;
  myDate = new Date(Date.now() - 6574 * (1000 * 3600 * 24));
  //disabledFuture: { from: new Date(Date.now() - 6574 * (1000 * 3600 * 24)),to: new Date(Date.now() - 36526 * (1000 * 3600 * 24))};
  //defaultDate: new Date(Date.now() - 6574 * (1000 * 3600 * 24)),
  //timeStamp: new Date().getTime();

  constructor(private _fb: FormBuilder,
    private _restService: RestService) {

}

  ngOnInit(): void {
    this.initialize();
  }

  initialize() {
    
   }

  
  
}

