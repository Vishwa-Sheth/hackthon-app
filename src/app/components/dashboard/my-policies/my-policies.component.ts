import { Component, OnInit } from '@angular/core';
import { CustomerModel, ErrorCustomerUIModel, } from 'src/app/models/customerProfileData';
import { RestService } from "src/app/services/rest.service";
import { eChannelConfig } from 'src/app/constants/configuration';
import * as Constants from "src/app/constants/Constants";
import {Subject,Observable} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WebcamComponent } from './../../../webcam/webcam.component';




@Component({
  selector: 'app-my-policies',
  templateUrl: './my-policies.component.html',
  styleUrls: ['./my-policies.component.css']
})
export class MyPoliciesComponent implements OnInit {

  isActive: boolean;
  isPending: boolean;
  isExpired: boolean = true;

  public policy: any = '';
  public email: string = '';
  public emailPolicyNo: string = '';
  public profileModel: CustomerModel;
  public IsShowloader: boolean = false;
  public IsShowEmailPopUp: boolean = false;
  public submitEmailPolicyResult:boolean = false;
  public dashboardErrorUIModel = new ErrorCustomerUIModel();


  policyListData = [];
  policyName: string = "";
  viewPdfUrl: string = "";
  public isEmail = false;
  submitEmailPolicyValue: string = '';
  public imgPath: string = "/docs/default-source/assets/images/";
  public rawHTML: string = "";
  public renewalStatus: string = "";
  public renewalDays: string = "";
  public renewalUrl: string = "";
  public imgFullPath: string = "";
  
  public pendingStatus: string = "";
  public policyNameValue: string = "";
  
  public pendingpolicies: string = "";
  public policyStatus: string = "";
  public expiredPolicyDataList = [];
  public pendingPolicyDataList = [];
  public submit: boolean = false;
  submitForm: FormGroup;
  submitErrorFlag: boolean = false;
  submitemailErrorMessage: string = "";
  
  public webcamImage: WebcamImage = null;
  handleImage(webcamImage: WebcamImage) {
  this.webcamImage = webcamImage;
  }
  constructor(private _restService: RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  


  userProfile() {
    this._restService.GetUserProfile("0")
      .then((res) => {
        
      })
      .catch((error) => {
        console.log("Error--> " + error);
      });
  }

  
}
