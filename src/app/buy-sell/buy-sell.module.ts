import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BuysellRoutingModule } from "./buy-sell-routing.module";
import {BuysellComponent } from "./buy-sell.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BuysellRoutingModule 
    ],
    declarations: [
        BuysellComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PinModule { }
