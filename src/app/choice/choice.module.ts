import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ChoiceRoutingModule } from "./choice-routing.module";
import {ChoiceComponent } from "./choice.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ChoiceRoutingModule 
    ],
    declarations: [
        ChoiceComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class ChoiceModule { }
