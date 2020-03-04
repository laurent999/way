import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ExchangeComponent } from "./exchange.component";

const routes: Routes = [
    { path: "exchange", component: ExchangeComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ExchangeRoutingModule { } 