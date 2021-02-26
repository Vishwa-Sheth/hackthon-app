import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import * as Constants from "src/app/constants/Constants";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  public page = new BehaviorSubject(null);

  public popup = new BehaviorSubject(null);

  constructor() { }

  setPage(data: string) {
    this.page.next(data);
  }

  setPopup(data: string) {
    this.popup.next(data);
  }

}
