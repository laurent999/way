import { Component, OnInit } from "@angular/core";
import { recuModule } from "./recu.module";
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
    selector: "recu",
    templateUrl: "./recu.component.html",
    styleUrls: ["./recu.css"]
})
export class RecuComponent  {

    constructor( private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}