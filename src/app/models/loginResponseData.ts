import { BaseResponseData } from "src/app/models/baseResponseData";
export class LoginResponseData extends BaseResponseData {
    userName: string;
    lastLogin: string;
    authToken: string;
    tokenExpiry: Date;
    iPartnerUserId: number;
    isGuestUser: boolean;
    token: string;
    expiry: Date;
    clientId: number;

    public static withAPIData(res): LoginResponseData {
        let obj = new LoginResponseData();
        obj.userName = res.userName;
        obj.lastLogin = res.lastLogin;
        obj.authToken = res.authToken;
        obj.tokenExpiry = res.tokenExpiry;
        obj.iPartnerUserId = res.iPartnerUserId;
        obj.isGuestUser = res.isGuestUser;
        obj.token = res.token;
        obj.expiry = res.expiry;
        obj.clientId = res.clientId;
        obj.setData(res);
        return obj;
    }
}
