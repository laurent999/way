import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ExchangeRoutingModule } from "./exchange-routing.module";
import { ExchangeComponent } from "./exchange.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        ExchangeRoutingModule 
    ],
    declarations: [
        ExchangeComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ExchangeModule { }
