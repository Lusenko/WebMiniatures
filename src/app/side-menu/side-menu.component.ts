import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {ModalDialogComponent} from "../modal-dialog/modal-dialog.component";

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.scss']
})
export class SideMenuComponent implements OnInit {

  constructor( private readonly dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openModalDialog(){
    this.dialog.open(ModalDialogComponent)
  }
}
