import { BaseResponseData } from "src/app/models/baseResponseData";
import { AddressModel, CustomerGSTInTaxDetail, PageIdentifier, ApplicantModel } from "src/app/models/baseResponseData";


export class CustomerProfileData extends BaseResponseData {
    aadharNo: number;
    address: string;
    cityId: number;
    cityName: string;
    cityNameStateName: string;
    countryId: number;
    landmark: string;
    pinCode: string;
    stateId: number;
    stateName: string;
    age: number;
    dateOfBirth: string;
    ecsCustomerId: string;
    eiaNumber: number;
    emailId: string;
    gender: string;
    gstCustomerDetails: string;
    landLineNum: number;
    maritalStatus: string;
    name: string;
    panCardNo: string;
    passportNo: string;
    relationShipId: number;
    relationShipName: string;
    telephoneNo: number;
    titleName: string;

    public static withAPIData(res): CustomerProfileData {
      let obj = new CustomerProfileData();
      obj.aadharNo = res.aadharNo;
      obj.address = res.address.address;
      obj.cityId = res.address.cityId;
      obj.cityName = res.address.cityName;
      obj.cityNameStateName = res.address.cityNameStateName;
      obj.countryId = res.address.countryId;
      obj.landmark = res.address.landmark;
      obj.pinCode = res.address.pinCode;
      obj.stateId = res.address.stateId;
      obj.stateName = res.address.stateName;
      obj.age = res.age;
      obj.dateOfBirth = res.dateOfBirth;
      obj.ecsCustomerId = res.ecsCustomerId;
      obj.eiaNumber = res.eiaNumber;
      obj.emailId = res.emailId;
      obj.gender = res.gender;
      obj.gstCustomerDetails = res.gstCustomerDetails;
      obj.landLineNum = res.landLineNum;
      obj.maritalStatus = res.maritalStatus;
      obj.name = res.name;
      obj.panCardNo = res.panCardNo;
      obj.passportNo = res.passportNo;
      obj.relationShipId = res.relationShipId;
      obj.relationShipName = res.relationShipName;
      obj.telephoneNo = res.telephoneNo;
      obj.titleName = res.titleName;
        obj.setData(res);
        return obj;
      }
}


//customer model changes

export class CustomerModel extends BaseResponseData {

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
  public PageIdentifier: PageIdentifier;
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

}





//
