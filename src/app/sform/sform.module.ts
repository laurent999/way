import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SformRoutingModule } from "./sform-routing.module";
import { SformComponent } from "./sform.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SformRoutingModule 
    ],
    declarations: [
        SformComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SformModule { }
