import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BformRoutingModule } from "./bform-routing.module";
import {BformComponent } from "./bform.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BformRoutingModule 
    ],
    declarations: [
        BformComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BformModule { }
