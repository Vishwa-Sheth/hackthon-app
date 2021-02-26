import { Component, ViewEncapsulation } from '@angular/core';
import {Subject,Observable} from 'rxjs';
import {WebcamImage} from 'ngx-webcam';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'LoginPage';
  // public webcamImage: WebcamImage = null;
  // handleImage(webcamImage: WebcamImage) {
  // this.webcamImage = webcamImage;
  // }
}
