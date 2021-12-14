import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {CreateCatalogueComponent} from "../create-catalogue/create-catalogue.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  constructor( private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModalDialog(){
    this.dialog.open(CreateCatalogueComponent,
      {
          autoFocus: false,
          panelClass: 'create-catalogue',
          width: '488px'
      })
  }
}
