import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page/page';
@Component({
    selector: "buy-sell",
    templateUrl: "./buy-sell.component.html",
    styleUrls:["./buy-sell.css"]
})
export class BuysellComponent  {

    constructor( private page: Page) {
        this.page.actionBarHidden = true;}

    ngOnInit(): void {
        // Init your component properties here.
    }
}
