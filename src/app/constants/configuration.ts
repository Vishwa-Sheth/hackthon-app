export class eChannelConfig {

    public static BaseUrl = "/eChannelServices/api/"; //Base Url for api call
    //public static BaseUrl: string = "http://localhost:5019/api/"; //Base Url for api call
    public static BaseUrlforOldUI = "/IpartnerService/core/api/"; //Base Url for api call
    //public static BaseUrlforOldUI = "http://localhost:50920/core/api/";
    public static BaseUrlforUIUX = "/ipartner_web/api/"; //Base Url for api call

    ////////////////////////////////////////////Product RedirectionURL///////////////////////////////////////////////////////
    public static ViewWellnessUrl = "https://ipartner.icicilombard.com/WebPages/Customers/NWCHISingleSignOn.aspx?PolicyNo="

    //Motor
 /// public static LOGIN_URL = "https://www.icicilombard.com/registration-new-ui";
  public static LOGIN_URL = eChannelConfig.BaseUrl + "auth/token";
  public static REGISTER_URL = eChannelConfig.BaseUrl + "user/register";
  public static GETSESSIONVERSION_URL = eChannelConfig.BaseUrl + "Master/GetSessionVersion";
  public static CUSTOMERPROFILE_URL = eChannelConfig.BaseUrl + "Customer/Profile/0?nocache=";
  public static FORGOTPASSWORD_URL = eChannelConfig.BaseUrl + "user/forgot-password";
  public static SENDOTP_URL = eChannelConfig.BaseUrl + "user/otp";
  public static OTPLOGIN_URL = eChannelConfig.BaseUrl + "auth/otp";
  public static GUEST_LOGIN_URL = eChannelConfig.BaseUrl + "auth/guest";
  
  public static CREATE_PAYMENT_TRANSACTION_URL = "/IPartnerService/core/api/" + "Payment/CreatePaymentTransaction";
  public static PAYMENT_TRANSACTION_URL = eChannelConfig.BaseUrl + "Payment/Transaction";
  public static GETPAYMENT_URL = eChannelConfig.BaseUrl + "Customer/Payment";
  public static GETQUOTE_URL = eChannelConfig.BaseUrl + "Customer/Quote";
  public static GETFAMILY_URL = eChannelConfig.BaseUrl + "Customer/Family";
  public static GETPOLICY_URL = eChannelConfig.BaseUrl + "Customer/Policy";
  public static PROFILE_URL = eChannelConfig.BaseUrl + "Customer/Profile";
  public static GETPINCODE_URL = eChannelConfig.BaseUrl + "Master/CityDistrict/PinCode/";
  public static ChangeUserPasswordUrl = eChannelConfig.BaseUrl + "User/ChangePassword";
  public static TAGPOLICY_URL = eChannelConfig.BaseUrl + "Customer/Account/Policy";
  public static GetEmailLinkRequest = eChannelConfig.BaseUrl + "Payment/GetEmailLinkRequest";
  public static SendEmailPaymentLink = eChannelConfig.BaseUrl + "Payment/PaymentLink";
  public static IpSendEmailPaymentLink = eChannelConfig.BaseUrlforOldUI + "Payment/SendEmailPaymentLink";
  public static GetUserProfileUrlRequest = eChannelConfig.BaseUrl + "Customer/Profile";
  public static ViewPDFUrl = eChannelConfig.BaseUrl + "Customer/Certificate";
  public static EmailPolicyUrl = eChannelConfig.BaseUrl + "Customer/EmailPolicy";
  public static DashboardUserProfileUrl = eChannelConfig.BaseUrl + "Customer/DashboardProfile";
  public static ProfileImageUrl = "/images/default-source/phoenix/userimage/";

  ///=======================dashboard==================================//

  public static TwoWheelerPlanPageUrl = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/select-plans";
  public static TwoWheelerPlanPageUrlNRT = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/select-plans-fresh";
  public static PrivateCarPlanPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/select-plans";
  public static FWFreshPlanPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/select-plans";
  public static FWFreshInsuredPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details";
  public static PPPlanPageUrl = "/health-insurance-plans/personal-accident-insurance-policy/get-quote/select-plans";
  public static BoosterPlanPageUrl = "/health-insurance-plans/super-top-up-plan/get-quote/select-hb-plans";
  public static ArogyaPlanPageUrl = "/health-insurance-plans/arogya-sanjeevani-policy/get-quote/select-ags-plans";
  public static CHIPlanPageUrl = "/health-insurance-plans/health-insurance-policy/get-quote/select-chi-plans";
  public static TravelPlanPageUrl = "/travel-insurance-online/get-quote/select-plans";
  public static HomePlanPageUrl = "/home-insurance/get-quote/select-plans";
  public static MarinePlanPageUrl = "/marine-insurance-policy/marine-select-plan";
  public static MerchantPlanPageUrl = "/merchant-insurance/merchant-select-plan";
  public static CyberPlanPageUrl = "/cyber-insurance-landing/cyber-insurance-plan";
  public static TwoWheelerInsuredPageUrl = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/insured-details";
  public static TwoWheelerInsuredPageUrlNRT = "/motor-vehicle-insurance-policy/two-wheeler-insurance-online/get-quote/insured-details-fresh";
  public static PrivateCarInsuredPageUrl = "/motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details";
  public static FWFreshPaymentPageUrl = "/payment-fresh?returl=motor-vehicle-insurance-policy/car-insurance-online/get-quote/insured-details/";
  public static PPInsuredPageUrl = "/health-insurance-plans/personal-accident-insurance-policy/get-quote/pp-insured-details";
  public static BoosterInsuredPageUrl = "/health-insurance-plans/super-top-up-plan/get-quote/hb-insured-details";
  public static BoosterRNPageUrl = "/renew-policy/health/hb-renewal";
  public static ArogyaInsuredPageUrl = "/health-insurance-plans/arogya-sanjeevani-policy/get-quote/insured-details-ags";
  public static CHIInsuredPageUrl = "/health-insurance-plans/health-insurance-policy/get-quote/insured-details";
  public static TravelInsuredPageUrl = "/travel-insurance-online/get-quote/insured-details";
  public static HomeInsuredPageUrl = "/home-insurance/get-quote/insured-details";
  public static MarineInsuredPageUrl = "/marine-insurance-policy/marine-insured-details";
  public static MerchantInsuredPageUrl = "/merchant-insurance/merchant-insured-details";
  public static CyberInsuredPageUrl = "/cyber-insurance-landing/cyber-insurance-insured-detail";
  public static CyberFreshPaymentPageUrl = "/payment-fresh?returl=cyber-insurance-landing/cyber-insurance-insured-detail";

  //===============================================================================//


  public static ipartnerApi = "http://localhost:7000/eChannelServices/api/";

  public static CryptoKey = "7080808080808083";
  public static CryptoIv = "9080808080808083";

  public static google_client_id = "724240248368-e9hine274f3kpo98631hstncqta4p361.apps.googleusercontent.com";
  public static google_client_secret = "C0hhVjZA2CqOPqPMr2bXUeZ-";

  public static ClientId = window.sessionStorage.getItem("clientId") == (null || undefined) ? 1 : window.sessionStorage.getItem("clientId");

  public static AuthToken = window.sessionStorage.getItem("AuthorizationToken") == (null || undefined) ? "" : window.sessionStorage.getItem("AuthorizationToken");
  public static gclId = window.sessionStorage.getItem("gclid") == (null || undefined) ? "" : window.sessionStorage.getItem("gclid");
  public static efId = window.sessionStorage.getItem("ef_id") == (null || undefined) ? "" : window.sessionStorage.getItem("ef_id");


  //DOB configuration
  public static DATE_DOB_MAX = new Date(
    new Date().getFullYear() - 18,
    new Date().getMonth(),
    new Date().getDate()
  );
  public static DATE_DOB_MIN = new Date(new Date().getFullYear() - 120, 0, 1);

}


