import { Injectable } from '@angular/core';

@Injectable()
export class TextConstants {

  //validation messages
  public static readonly NAME_ERROR_MESSAGE = "Please enter your full name";
  public static readonly PHONE_ERROR_MESSAGE = "Please enter your mobile number";
  public static readonly VALID_PHONE_ERROR_MESSAGE = "Please enter valid mobile number";
  public static readonly PASSWORD_ERROR_MESSAGE = "Please enter password";
  public static readonly EMAIL_ERROR_MESSAGE = "Please enter your email id";
  public static readonly DOB_ERROR_MESSAGE = "Please enter your date of birth";
  public static readonly CONFIRM_PASSWORD_ERROR_MESSAGE = "Please enter your correct password";
  public static readonly PASSWORD_DONT_MATCH = "Both password should match";
  public static readonly CORRECT_PASSWORD_MESSAGE = "Please enter password";
  public static readonly VALID_EMAIL_MESSAGE = "Please enter a valid email id";
  public static readonly OTP_ERROR_MESSAGE = "Please enter your correct 6-digit OTP";
  public static readonly TNC_ERROR_MESSAGE = "Please accept terms and conditions";
  public static readonly VALID_PASSWORD_MESSAGE = "Please enter valid format.(e.g. Abc@123)";
  public static readonly MINLENGTH_PASSWORD_MESSAGE = "Password should contain minimum 8 characters";
}
