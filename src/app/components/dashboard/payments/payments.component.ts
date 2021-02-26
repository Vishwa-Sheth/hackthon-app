import { Component, OnInit } from '@angular/core';
import { RestService } from "src/app/services/rest.service";
import { eChannelConfig } from 'src/app/constants/configuration';
import * as Constants from "src/app/constants/Constants";
import { EmailPaymentLinkUIModel, IpEmailPaymentLinkUIModel } from "src/app/models/api.models";

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {

  paymentExists: boolean = false;
  isNull: boolean;
  showPayment: boolean = false;
  showProposal: boolean = false;
  IsPopUpError: boolean = false;
  IsPopUpMessage: string;

  payment: any;
  policyName: string;
  proposalNo: string;
  totalPremium: number;
  queryString: string;
  externParams: string;
  isechannelproduct: boolean = false;
  emailAddress: string;
  proposal: string;

  EmailPaymentModel: EmailPaymentLinkUIModel = new EmailPaymentLinkUIModel();
  IpEmailPaymentModel: IpEmailPaymentLinkUIModel = new IpEmailPaymentLinkUIModel();

  imgPath: string = "/docs/default-source/assets/images/";

  constructor(private _restService: RestService) { }

  ngOnInit(): void {
  }

}
