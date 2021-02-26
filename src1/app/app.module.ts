import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {TranslateModule,TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { WebcamComponent } from './webcam/webcam.component';
import {WebcamModule} from 'ngx-webcam';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { AlertsSectionComponent } from './sections/alerts-section/alerts-section.component';
import { ButtonsSectionComponent } from './sections/buttons-section/buttons-section.component';
import { CrsSectionComponent } from './sections/crs-section/crs-section.component';
import { InputsSectionComponent } from './sections/inputs-section/inputs-section.component';
import { ModalComponent } from './sections/modal/modal.component';
import { NavigationSectionComponent } from './sections/navigation-section/navigation-section.component';
import { NucleoSectionComponent } from './sections/nucleo-section/nucleo-section.component';
import { TabsSectionComponent } from './sections/tabs-section/tabs-section.component';
import { TypographySectionComponent } from './sections/typography-section/typography-section.component';
import { VersionsSectionComponent } from './sections/versions-section/versions-section.component';
import { SectionsComponent } from './sections/sections.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export function HttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http,"angular-i18n")
}


@NgModule({
  declarations: [
    AppComponent,
    WebcamComponent,
    HomeComponent,
    LandingComponent,
    ProfileComponent,
    LoginComponent,
    AlertsSectionComponent,
    ButtonsSectionComponent,
    CrsSectionComponent,
    InputsSectionComponent,
    ModalComponent,
    NavigationSectionComponent,
    NucleoSectionComponent,
    TabsSectionComponent,
    TypographySectionComponent,
    VersionsSectionComponent,
    SectionsComponent,
    FooterComponent,
    NavbarComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    WebcamModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader:{
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
