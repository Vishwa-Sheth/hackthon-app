import * as Constants from "src/app/constants/Constants";

export interface ILoginRequestBody {
  Login: string;
  Password: string;
  LoginType: string;
  //ProductScreen: string;
}


export interface IRegisterRequestBody {
  EmailId: string;
  UserPassword: string;
  UserName: string;
  DateOfBirth: string;
  MobileNo: string;
  UserTitleId: string;
  LoginType: string;
}

export interface IForgotPasswordRequestBody {
  EmailId: string;
  DateOfBirth: string;

}

export interface ISendOTPRequestBody {
  Login: string;
  LoginType: string;

  //ProductScreen: string;
}


export interface IOtpLoginRequestBody {
  EmailId: string;
  OTP: number;
  LoginType: string;
  //ProductScreen: string;
}

export interface ICreatePaymentRequestBody {


  policyId: Array<string>;

  //ProductScreen: string;
}

export interface IPaymentRequestBody {


  ProposalId: Array<string>;

 
}

//----------------------dashboard models----------------------------------//

export class ChangePasswordUIRequestModel {
  newPassword: string;
  currentPassword: string;
}

export class SearchWithPolicyNoRequestModel {
  PolicyEndDate: string;
  PolicyNo: string;
  SearchType: string;
}

export class SearchWithVehicleRegNoRequestModel {
  PolicyEndDate: string;
  RegisNp: string;
  SearchType: string;
}

export class SearchWithLANRequestModel {
  LanNo: string;
  PolicyEndDate: string;
  SearchType: string;
}

class PaymentTransactionRequestUIModel {

  public ProposalId: Array<string>;
  public PANNo: string;

  public PaymentTransactionId: string;
}

export class EmailPaymentLinkUIModel extends PaymentTransactionRequestUIModel {
  public EmailId: Array<string>;
  public CustEmailId: string;
  public CustomerName: string;
  public AltEmailId: string;
  public ProposalIds: string;
  public IsCorrect: boolean;
  public EmailLinkStatus: number;
  public MobileNo: number;
}

export class IpEmailPaymentLinkUIModel extends PaymentTransactionRequestUIModel {
  public EmailId: string;

  public CustEmailId: string;
  public CustomerName: string;
  public AlternetEmailId: string;
  public PfProposalNo: string;
  public PANNumber: string;
  public IsCorrect: boolean;
  public IsEmailPropsal: number;
  public MobileNo: number;
}

class BaseUIResponseModel {

  public success: boolean;
  public errorMessage: string;
  public corelationId: string;
  public technicalErrorMessage: string;
}

export class CustomerModel extends BaseUIResponseModel {

  public titleName: string;
  public name: string;
  public gender: string;
  public ecsCustomerId: string;
  public iPartnerUserId: number;
  public emailId: string;
  public mobileNo: string;
  public dateOfBirth: string;
  public dob: Date;
  public telephoneNo: string;
  public panCardNo: string;
  public passportNo: string;
  public aadharNo: string;
  public address: AddressModel;
  public gstCustomerDetails: CustomerGSTInTaxDetail;
  public PageIdentifier: Constants.PageIdentifier;
  public applicantDetails: ApplicantModel;
  public titleId: string;
  public maritalStatus: string;
  public landline: string;
  public eiaNumber: string;
  //Added by Firoz
  public renewWithExisCust: string;
  public landLineNo: string;
  public LandLineNum: string
}

export class AddressModel {

  public address: string;
  public address2: string;
  public landmark: string;
  public stateId: number;
  public cityId: number;
  public pinCode: number;
  public cityName: string;
  public stateName: string;
  public cityNameStateName: string;
  public countryId: number;
}

class CustomerGSTInTaxDetail {

  public gstiN_UINNo: string = "";
  public panNo: string = "";
  public constitutionOfBusinessText: string = "";
  public customerTypeText: string = "";
  public gstRegistrationStatusText: string = "";
}

class ApplicantModel {

  public RelationshipWithApplicant: string;
  public insuredName: string;
  public dateOfBirth_: Date;
  public dateOfBirth: string;
  public heightFt: number;
  public heightInc: number;
  public weight: number;
  public ped: string;
  public occupation: string;
}

export class ErrorCustomerUIModel {

  public title: boolean;
  public titleName: boolean;  // for HB New
  public name: boolean;
  public invalidName: boolean;
  public gender: boolean;
  public emailId: boolean;
  public invalidEmailId: boolean;
  public mobileNo: boolean;
  public dateOfBirth: boolean;
  public invalidDateOfBirth: boolean;
  public pinCode: boolean;
  public invalidPinCode: boolean;
  public cityState: boolean;
  public telephoneNo: boolean;
  public invalidTelephoneNo: boolean;
  public passportNo: boolean;
  public panNo: boolean;
  public invalidPanNo: boolean;
  public address: boolean;
  public landmark: boolean;
  public gstInNo: boolean;
  //Added BY Nikhil for GSTIN IL Pan Validation
  public gstInPanILno: boolean;
  public gstInNo_invalid: boolean;
  public nomineeName: boolean;
  public nomineeNameMinCharacter: boolean;
  public nomineerelation: boolean;
  public invalidNomineeName: boolean;
  public relationshipWithNominee: boolean;
  public nomineeDob: boolean;
  public invalidNomineeDob: boolean;
  public IsError: boolean;
  public IsPopUpError: boolean;
  public IsPopUpMessage: string;
  public isLombardPan: boolean;
  public IsShowloader: boolean;

}

export class NomineeUIModel extends BaseUIResponseModel {

  public nameOfNominee: string;
  public relationshipWithNominee: string;
  public nomineeDob: Date;
  public relationship: Array<string>;
  public name: string;
  public dateOfBirth: Date;
  public relationShipName: string;
  public title: string;
  public titleName: string;
  public gender: string;
  public relationshipId: string;
  public userFamilies: userFamilies[];
  public insuredOccupation: string;
  public sequenceNumber: number;
  public age: number;
}

class userFamilies {

  public lastName: string;
  public relationship: string;
  public relationshipId: string;
  public dateOfBirth: Date;
  public familyId: string;
  public gender: number;
}
