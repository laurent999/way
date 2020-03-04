import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { RecuRoutingModule } from "./recu-routing.module";
import { RecuComponent } from "./recu.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        RecuRoutingModule
    ],
    declarations: [
        RecuComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class recuModule { } 