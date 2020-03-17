import { Component, OnInit } from "@angular/core";
import { AppComponent } from "../app.component";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: "bform",
    templateUrl: "./bform.component.html",
    styleUrls: ["./bform.css"]
})
export class BformComponent  {

    constructor( private page: Page) {
        this.page.actionBarHidden = true;
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    
} 
