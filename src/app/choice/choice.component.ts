import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: "choice",
    templateUrl: "./choice.component.html",
    styleUrls:["./choice.css"]
})
export class ChoiceComponent  {

    constructor( private page: Page) {
        // Use the component constructor to inject providers.
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }
}
