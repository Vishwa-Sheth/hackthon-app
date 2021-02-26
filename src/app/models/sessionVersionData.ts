import { BaseResponseData } from "src/app/models/baseResponseData";
export class SessionVersionData extends BaseResponseData {
  cityDistrict: number;
  customerFamilylist: number;
  fwMakeAndModel: number;
  fwRTOLocation: number;
  fwRevisedMakeAndModel: number;
  nomineeRelatioship: number;
  previousInsurer: number;
  twMakeAndModel: number;
  twRTOLocation: number;

  public static withAPIData(res): SessionVersionData {
    let obj = new SessionVersionData();
    obj.cityDistrict = res.cityDistrict;
    obj.customerFamilylist = res.customerFamilylist;
    obj.fwMakeAndModel = res.fwMakeAndModel;
    obj.fwRTOLocation = res.fwRTOLocation;
    obj.fwRevisedMakeAndModel = res.fwRevisedMakeAndModel;
    obj.nomineeRelatioship = res.nomineeRelatioship;
    obj.previousInsurer = res.previousInsurer;
    obj.twMakeAndModel = res.twMakeAndModel;
    obj.twRTOLocation = res.twRTOLocation;
        obj.setData(res);
        return obj;
    }
}
