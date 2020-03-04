import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BuysellComponent } from "./buy-sell.component";

const routes: Routes = [
    { path: "buy-sell", component: BuysellComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BuysellRoutingModule { } 