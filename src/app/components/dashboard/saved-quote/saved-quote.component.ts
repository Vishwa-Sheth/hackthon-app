import { Component, OnInit } from '@angular/core';
import { RestService } from "src/app/services/rest.service";
import { eChannelConfig } from 'src/app/constants/configuration';
import * as Constants from "src/app/constants/Constants";

@Component({
  selector: 'app-saved-quote',
  templateUrl: './saved-quote.component.html',
  styleUrls: ['./saved-quote.component.css']
})
export class SavedQuoteComponent implements OnInit {

  quote: any;
  quoteExists: boolean = false;

  expirationDays: any;
  quoteName: string;
  imgPath: string = "/docs/default-source/assets/images/";
  queryString = "";
  totalPremium: number;
  pfQuoteId: string;

  constructor(private _restService: RestService) {

  }

  ngOnInit(): void {
  }

  
}
