import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {CataloguesComponent} from "../main-catalogue/catalogues/catalogues.component";
import {AuthorizationComponent} from "./authorization/authorization.component";

const routes: Routes = [
  {path: '', component: AuthorizationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
