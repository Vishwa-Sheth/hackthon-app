import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { WebcamComponent } from '../../../webcam/webcam.component';
import {WebcamModule} from 'ngx-webcam';


@NgModule({
  declarations: [
    WebcamComponent
  ],
  imports: [
    BrowserModule,
    WebcamModule
  ],
  exports: [ BrowserModule]
})
export class MyPoliciesModule {
}
