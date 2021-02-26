import { Injectable } from "@angular/core";
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: "root",
})
export class PopupService {
    constructor() { }

    position: any;
    popUpType: string;

//null value to avoid redirection on init in policy handler
    public skipLoginPopUpOpen = new BehaviorSubject(null);


    openSkipLoginPopUp() {

      this.skipLoginPopUpOpen.next(true);
      this.removeScroll();

    }

    closeSkipLoginPopUp() {

      this.skipLoginPopUpOpen.next(false);
      this.addScroll();
        
    }

    removeScroll() {

        this.position = window.scrollY;
        window.scrollTo(0, 0);
        document.body.classList.add("over-hidden");

    }

    addScroll() {

        document.body.classList.remove("over-hidden");
        window.scroll(0, this.position);
    }
}
