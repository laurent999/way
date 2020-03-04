import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { ChoiceComponent } from "./choice.component";

const routes: Routes = [
    { path: "choice", component: ChoiceComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class ChoiceRoutingModule { } 