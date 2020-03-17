import { Component, OnInit } from "@angular/core";
import { Page } from 'tns-core-modules/ui/page/page';

@Component({
    selector: "Home",
    templateUrl: "./home.component.html",
    styleUrls:["./home.css"]
})
export class HomeComponent implements OnInit {

    constructor( private page: Page) {
    	this.page.actionBarHidden = true;
    }
    
    ngOnInit(): void {}
}
