import { Component, OnInit } from "@angular/core";
import { PopupService } from "src/app/services/popup.service";


@Component({
    selector: "app-skip-login",
    templateUrl: "./skip-login.component.html",
    styleUrls: ["./skip-login.component.css"],
})
export class SkipLoginComponent implements OnInit {


    constructor(
        private _popUpService: PopupService,
    ) {
    }

    ngOnInit(): void {
    }

  close() {
    this._popUpService.closeSkipLoginPopUp();
    }
}
