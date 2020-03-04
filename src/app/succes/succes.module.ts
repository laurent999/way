import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SuccesRoutingModule } from "./succes-routing.module";
import {SuccesComponent } from "./succes.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SuccesRoutingModule 
    ],
    declarations: [
        SuccesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SuccesModule { }
