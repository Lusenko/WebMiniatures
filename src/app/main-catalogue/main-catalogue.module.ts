import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCatalogueRoutingModule } from './main-catalogue-routing.module';
import {HeaderComponent} from "./catalogues/header/header.component";
import {SideBarComponent} from "./catalogues/side-bar/side-bar.component";
import {MainComponent} from "./catalogues/main/main.component";
import {CreateCatalogueComponent} from "./catalogues/create-catalogue/create-catalogue.component";
import {CataloguesComponent} from "./catalogues/catalogues.component";
import {MatSliderModule} from "@angular/material/slider";
import {MatIconModule} from "@angular/material/icon";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {MatOptionModule} from "@angular/material/core";
import {MatInputModule} from "@angular/material/input";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatCardModule} from "@angular/material/card";
import {ReactiveFormsModule} from "@angular/forms";
import {MatDialogModule} from "@angular/material/dialog";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";



@NgModule({
  declarations: [
    HeaderComponent,
    SideBarComponent,
    MainComponent,
    CreateCatalogueComponent,
    CataloguesComponent,
  ],
  imports: [
    CommonModule,
    MainCatalogueRoutingModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatOptionModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCardModule,
    ReactiveFormsModule,
    MatDialogModule,
    PerfectScrollbarModule,
    MatButtonModule,
    MatMenuModule,
  ]
})
export class MainCatalogueModule { }
