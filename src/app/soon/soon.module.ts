import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { SoonRoutingModule } from "./soon-routing.module";
import { SoonComponent } from "./soon.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        SoonRoutingModule 
    ],
    declarations: [
        SoonComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SoonModule { }
