import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";
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

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "pin", component: PinComponent },
    { path: "choice", component: ChoiceComponent },
    { path: "buy-sell", component: BuysellComponent },
    { path: "bform", component: BformComponent },
    { path: "recu", component: RecuComponent },
    { path: "succes", component: SuccesComponent },
    { path: "sform", component: SformComponent },
    { path: "sell", component: SellComponent },
    { path: "exchange", component: ExchangeComponent },
    { path: "soon", component: SoonComponent },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
