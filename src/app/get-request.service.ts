import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpParams } from "@angular/common/http";
import {WebcamComponent} from './webcam/webcam.component'

@Injectable({
  providedIn: 'root'
})
export class GetRequestService {

  constructor(private httpClient: HttpClient) { }
  public sendGETRequestWithParameters(){   
    let params = new HttpParams();
    let webcamComponent = new WebcamComponent();
    params = params.append('ImageLink',webcamComponent.imageURL );

    return this.httpClient.get("http://server.com/api/products", {params: params});
   }
}
