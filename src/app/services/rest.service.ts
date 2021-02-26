import { Injectable, ErrorHandler } from "@angular/core";
import { HttpClient, HttpHeaders, HttpBackend } from "@angular/common/http";
import { eChannelConfig } from 'src/app/constants/configuration';
import { LoginResponseData } from "src/app/models/loginResponseData";
import { BaseResponseData } from "src/app/models/baseResponseData";
import { Subject, from, throwError } from "rxjs";
import * as Constants from "src/app/constants/Constants";
import { ILoginRequestBody, IRegisterRequestBody, IForgotPasswordRequestBody, ISendOTPRequestBody, IOtpLoginRequestBody } from "src/app/models/api.models";
import { map, catchError } from "rxjs/operators";
import * as CryptoJS from 'crypto-js';
import { environment } from 'src/environments/environment';
import { CustomerProfileData } from '../models/customerProfileData';
import { SessionVersionData } from '../models/sessionVersionData';
import { EmailPaymentLinkUIModel, IpEmailPaymentLinkUIModel } from "src/app/models/api.models";

@Injectable({
  providedIn: "root",
})
export class RestService {
  baseUrl: String;lo
  path: string;
  flag: boolean;
  comError: string = '';
  loginComError: string = '';
  tokendata: any;
  date: any;

  constructor(private _http: HttpClient, private handler: HttpBackend) {

  }

  registerNewUiService(
    data: ILoginRequestBody
  ): Promise<LoginResponseData> {
 
 
    
    return this._http.post(eChannelConfig.LOGIN_URL, data)
      .pipe(map((response) => LoginResponseData.withAPIData(response)))
      .toPromise<LoginResponseData>();
    
  }

  registerService(
    data: any
  ): Promise<any> {
   

    return this._http.post(eChannelConfig.REGISTER_URL, data)
      .pipe(map((response) => LoginResponseData.withAPIData(response)))
      .toPromise<LoginResponseData>();
  }

  getSessionVersionService() {
   // this._token.generateToken;
  //  let headers = new HttpHeaders({
   ///   Authorization: "Bearer " + sessionStorage.getItem("AuthToken")

   /// });
   // let options = { headers: headers };
    return this._http.get(eChannelConfig.GETSESSIONVERSION_URL)
      .pipe(map((response) => SessionVersionData.withAPIData(response)))
      .toPromise<SessionVersionData>();
  }

  getCustomerProfileService() {
    this.date = new Date();
    return this._http.get(eChannelConfig.CUSTOMERPROFILE_URL + this.date.getTime())
     .pipe(map((response) => CustomerProfileData.withAPIData(response)))
      .toPromise<CustomerProfileData>();
  }

  getGuestUserService() {
    return this._http.post(eChannelConfig.GUEST_LOGIN_URL, {}).toPromise<any>();

  }

  getCreatePaymentService(
    data: any
  ): Promise<any> {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("AuthorizationToken")),
    });
    let options = { headers: headers };

    return this._http.post(eChannelConfig.CREATE_PAYMENT_TRANSACTION_URL, data, options).toPromise<any>();

  }

  getPaymentTransactionService(
    data: any
  ): Promise<any> {
    let headers = new HttpHeaders({
      Authorization: "Bearer " + JSON.parse(sessionStorage.getItem("AuthorizationToken")),
    });
    let options = { headers: headers };

    return this._http.post(eChannelConfig.PAYMENT_TRANSACTION_URL, data, options).toPromise<any>();

  }

  ForgotPasswordService(
    data: any
  ): Promise<any> {
   

    return this._http.post(eChannelConfig.FORGOTPASSWORD_URL, data).toPromise<any>();

  }

  sendOTPService(
    data: ISendOTPRequestBody
  ): Promise<BaseResponseData> {
   
    // this.makeAuthTokenRequest();

    return this._http.post(eChannelConfig.SENDOTP_URL, data)
      .pipe(map((response) => BaseResponseData.withAPIData(response)))
      .toPromise<BaseResponseData>();

  }

  OTPCallService(
    data: any
  ): Promise<any> {


    return this._http.post(eChannelConfig.OTPLOGIN_URL, data).toPromise<any>();

  }

  getPaymentService() {
    return this._http.get(eChannelConfig.GETPAYMENT_URL).toPromise<any>();
  }

  getQuoteService() {
    return this._http.get(eChannelConfig.GETQUOTE_URL).toPromise<any>();
  }

  getFamilyService() {
    return this._http.get(eChannelConfig.GETFAMILY_URL).toPromise<any>();
  }

  getPolicyService() {
    return this._http.get(eChannelConfig.GETPOLICY_URL).toPromise<any>();
  }


  getProfileService(
    data: any
  ): Promise<any> {

    // this.makeAuthTokenRequest();

    return this._http.post(eChannelConfig.PROFILE_URL, data).toPromise<any>();

  }


  getPincodeService(data) {
    return this._http.get(eChannelConfig.GETPINCODE_URL + data).toPromise<any>();
  }

  changeUserPassword(data: any) {
    return this._http.post(eChannelConfig.ChangeUserPasswordUrl, data).toPromise<any>();
  }

  searchPolicy(data: any) {
    return this._http.post(eChannelConfig.TAGPOLICY_URL, data).toPromise<any>();
  }

  GetEmailLinkRequest(proposalNo: string, isechannelproduct: boolean) {
    return this._http.get(eChannelConfig.GetEmailLinkRequest + "/" + proposalNo + "/" + isechannelproduct).toPromise<any>();
  }​​​​

  SendEmailPaymentLink(data: EmailPaymentLinkUIModel) {
    return this._http.post(eChannelConfig.SendEmailPaymentLink, data).toPromise<any>();
  };

  IpSendEmailPaymentLink(data: IpEmailPaymentLinkUIModel) {
    return this._http.post(eChannelConfig.IpSendEmailPaymentLink, data).toPromise<any>();
  };

  GetDashboardUserProfile(ecsCustomerId: string) {
    return this._http.get(eChannelConfig.DashboardUserProfileUrl + "/" + ecsCustomerId + "?nocache=" + new Date().getTime()).toPromise<any>();
  }

  public async UpdateUserProfile(data: any) {
    return this._http.post(eChannelConfig.PROFILE_URL, data).toPromise<any>();
  }

  public async GetCityDistrictNamePincode(pinCode: string) {
    return this._http.get(eChannelConfig.GETPINCODE_URL + "/" + pinCode).toPromise<any>();
  }

  //policy api call
  GetUserProfile(ecsCustomerId: string) {
    console.log(ecsCustomerId);
    this.date = new Date();
    return this._http.get("http://localhost:4200/#").toPromise<any>();
    // return this._http.get(eChannelConfig.GetUserProfileUrlRequest + "/" + ecsCustomerId + "?nocache=" + this.date.getTime()).toPromise<any>();
  }​​​​

  EmailService(data: any) {
    return this._http.post(eChannelConfig.EmailPolicyUrl, data).toPromise<any>();
  }


  ViewPolicyPdfUrl(viewPdfUrl: string) {
   
    return this._http.get(viewPdfUrl).toPromise<any>();
  }​​​​
 
  //
}


