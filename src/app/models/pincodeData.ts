export class PincodeData {
  cityDistrictId: string;
  cityDistrictName: string;
  countryId: number;
  
    protected setData(res) {
      this.cityDistrictId = res.cityDistrictId;
      this.cityDistrictName = res.cityDistrictName;
      this.countryId = res.countryId;
    }

  public static withAPIData(res): PincodeData {
    let obj = new PincodeData();
    obj.setData(res);
    return obj;
  }
}
