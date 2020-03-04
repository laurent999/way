import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PinRoutingModule } from "./pin-routing.module";
import {PinComponent } from "./pin.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        PinRoutingModule
    ],
    declarations: [
        PinComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PinModule { }
