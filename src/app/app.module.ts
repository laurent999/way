import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PinComponent } from "./pin/pin.component";
import { ChoiceComponent } from "./choice/choice.component";
import { BuysellComponent } from "./buy-sell/buy-sell.component";
import { BformComponent } from "./bform/bform.component";
import { RecuComponent } from "./recu/recu.component";
import { SuccesComponent } from "./succes/succes.component";
import { SformComponent } from "./sform/sform.component";
import { SellComponent } from "./sell/sell.component";
import { ExchangeComponent } from "./exchange/exchange.component";
import { SoonComponent } from "./soon/soon.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [ 
        AppComponent,
        PinComponent,
        ChoiceComponent,
        BuysellComponent,
        BformComponent,
        RecuComponent,
        SuccesComponent,
        SformComponent,
        SellComponent,
        ExchangeComponent,
        SoonComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
