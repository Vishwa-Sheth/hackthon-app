export class BaseResponseData {
    success: boolean;
    errorMessage: string;
    corelationId: string;
    technicalErrorMessage: string;
    status: number;

    protected setData(res) {
        this.success = res.success;
        this.errorMessage = res.errorMessage;
        this.corelationId = res.corelationId;
        this.technicalErrorMessage = res.technicalErrorMessage;
        this.status = res.status;
    }

    public static withAPIData(res): BaseResponseData {
        let obj = new BaseResponseData();
        obj.setData(res);
        return obj;
    }
}


//customer profile changes
export class AddressModel {

  public address: string;
  public address2: string;
  public landmark: string;
  public stateId: number;
  public cityId: number;
  public pinCode: number;
  public cityName: string;
  public cityState: string;
  public cityNameStateName: string;
  public countryId: number;
}


export class CustomerGSTInTaxDetail {

  public gstiN_UINNo: string = "";
  public panNo: string = "";
  public constitutionOfBusinessText: string = "";
  public customerTypeText: string = "";
  public gstRegistrationStatusText: string = "";
}

export enum PageIdentifier {

  LandingPage = 1,
  PlanPage = 2,
  CustomizePage = 3,
  InsuredPage = 4
}

export class ApplicantModel {

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

//
