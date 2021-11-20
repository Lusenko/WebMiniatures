import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {CatalogueListComponent} from "../main/catalogue-list/catalogue-list.component";
import {SideMenuComponent} from "../side-menu/side-menu.component";

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styleUrls: ['./modal-dialog.component.scss']
})
export class ModalDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: CatalogueListComponent,
              @Inject(MAT_DIALOG_DATA) public data1: SideMenuComponent) { }

  ngOnInit(): void {
  }
}
