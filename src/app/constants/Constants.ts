
const SUPPORTS_INTL_API = typeof Intl !== "undefined";



//login component pages
export var LOGIN_PAGE: string = 'login';
export var FORGOT_PASSWORD_PAGE: string = 'forgot-password';
export var REGISTER_PAGE: string = 'register';

export var IS_USE_TEST_DATA: string = "IsUseTestData";

export var BASE_URL: string = "/eChannelServices/api";
export var GENERATE_TOKEN: string = BASE_URL + "/Auth/token";

//field vlaue
export var NAME: string = 'name';
export var DOB: string = 'dob';
export var DateOfBirth: string = 'dateofbirth';
export var PASSWORD: string = 'password';
export var CONFIRM_PASSWORD: string = 'confirmPassword';
export var EMAIL_ID: string = 'email';
export var MOBILE_NO: string = 'mobileNo';
export var OTP: string = 'otp';
export var PINCODE: string = 'pincode';
export var PANCARD: string = 'pancard';
export var ADDRESS: string = 'address';
export var CITY: string = 'city';
export var LANDMARK: string = 'landmark';

//dashboard component pages
export var PERSONAL_DETAILS: string = 'personal-details';
export var MY_POLICIES: string = 'my-policies';
export var PAYMENTS: string = 'payments';
export var SAVED_QUOTE: string = 'saved-quote';
export var CHANGE_PASSWORD: string = 'change-password';
export var TAG_POLICY: string = 'tag-policy';

export var PREVIOUS_PSWD: string = 'previousPswd';
export var NEW_PSWD: string = 'newPswd';
export var CONFIRM_PSWD: string = 'confirmPswd';

export var OPTION1: string = 'PolicyNo';
export var OPTION2: string = 'VehicleRegistrationNo';
export var OPTION3: string = 'LoanAccountNo';


export var Motor: number = 1;
export var Health: number = 2;
export var Travel: number = 3;
export var Home: number = 4;
export var Marine: number = 5;
export var Merchant: number = 6;
export var Cyber: number = 8;

export enum PageIdentifier {

  LandingPage = 1,
  PlanPage = 2,
  CustomizePage = 3,
  InsuredPage = 4,
  DashboardPage = 5
}

export enum Gender {
  Male = "Male",
  Female = "Female",
  Third = "Third"
}

export enum PolicyType {

  Motor = 1,
  Health = 2,
  Travel = 3,
  Home = 4,
  Marine = 5,
  Merchant = 6,
  Cyber = 8
}


//valid url check
export var REQUEST_URL_VALUE: string = "/manage-your-policy/dashboard,/payment-new-duplicate,/travel-insurance/get-quote/insured-details-duplicate,/motor-insurance/car-insurance/get-quote/insured-details-duplicate,/motor-insurance/two-wheeler-insurance/get-quote/insured-details-duplicate,/health-insurance/get-quote/chi-insured-details-duplicate,/health-insurance/get-quote/hb-details-duplicate,/health-insurance/get-quote/personal-protect-insured-details-duplicate,/home-insurance/get-quote/insured-details-duplicate,/payment-new/payment-confirmation-duplicate,/payment-new/ivr-confirmation-duplicate,/payment-new/proposal-confirmation-duplicate,/payment-new/cheque-dd-confirmation-duplicate,/renew-policy/travel/review-confirm-duplicate";
export var VALID_URL_ARRAY: Array<string> = REQUEST_URL_VALUE.split(',');


export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY'
  },
};


// export class DateFormat extends NativeDateAdapter {
//   useUtcForDisplay = true;
//   parse(value: any): Date | null {
//     if (typeof value === "string" && value.indexOf("/") > -1) {
//       const str = value.split("/");
//       const year = Number(str[2]);
//       const month = Number(str[1]) - 1;
//       const date = Number(str[0]);
//       return new Date(year, month, date); 
//     }
//     const timestamp = typeof value === "number" ? value : Date.parse(value);
//     return isNaN(timestamp) ? null : new Date(timestamp);
//   }
// }







