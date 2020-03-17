import { Component, OnInit , NgModule} from "@angular/core";
import { fromObject } from "tns-core-modules/data/observable";
import { BindingOptions } from "tns-core-modules/ui/core/bindable";
import { Page } from 'tns-core-modules/ui/page/page';
import { NativeScriptFormsModule } from "nativescript-angular/forms"

@NgModule({
    imports: [
        NativeScriptFormsModule
    ],
})
@Component({
    selector: "Pin",
    templateUrl: "./pin.component.html",
    styleUrls:["./pin.css"]
})
export class PinComponent  {

    ngOnInit(): void {
        var mypin: any;
   }
   constructor( private page: Page) {
    this.page.actionBarHidden = true;
}

  }