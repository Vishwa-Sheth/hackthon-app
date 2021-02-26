import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatInputModule } from '@angular/material/input';
// import { MatNativeDateModule, DateAdapter } from '@angular/material/core';
import * as Constants from "src/app/constants/Constants";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "src/app/app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HTTP_INTERCEPTORS } from "@angular/common/http";


import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { MyPoliciesComponent } from './my-policies/my-policies.component';
import { PaymentsComponent } from './payments/payments.component';
import { SavedQuoteComponent } from './saved-quote/saved-quote.component';
import { DashboardMainComponentComponent } from './dashboard-main-component/dashboard-main-component.component';
import { LeftPaneComponent } from './left-pane/left-pane.component';


@NgModule({
  declarations: [
    PersonalDetailsComponent,
    MyPoliciesComponent,
    PaymentsComponent,
    SavedQuoteComponent,
    DashboardMainComponentComponent,
    LeftPaneComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
   
  ],
  exports: [ BrowserModule],
  
})
export class DashboardModule { }
