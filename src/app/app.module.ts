import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { HomeComponent } from './pages/home/home.component';
import { SkipLoginComponent } from './modals/skip-login.component';
import { PipesModule } from './pipes/pipes.module';
import { TextConstants } from './lang/en-strings';
import { RestService } from './services/rest.service';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as Constants from "src/app/constants/Constants";
import {WebcamModule} from 'ngx-webcam';
import {MyPoliciesModule} from './components/dashboard/my-policies/my-policies.module'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SkipLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
    PipesModule,
    BrowserAnimationsModule,
    WebcamModule
  ],
  exports: [ BrowserModule,  HttpClientModule],
  providers: [RestService,   ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
