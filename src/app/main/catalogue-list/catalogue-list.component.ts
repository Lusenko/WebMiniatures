import {Component, Inject, OnInit} from '@angular/core';
import {GetGameListService} from "../../service/get-game-list.service";
import {Game} from "../../interface/game";
import {tap} from "rxjs/operators";
import {Option} from "./option";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ModalDialogComponent} from "../../modal-dialog/modal-dialog.component";
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";

interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-catalogue-list',
  templateUrl: './catalogue-list.component.html',
  styleUrls: ['./catalogue-list.component.scss']
})
export class CatalogueListComponent implements OnInit {

  games$ = this.getGameListService.localGame$;
  option = Option
  formGroup: FormGroup;

  constructor(private readonly getGameListService: GetGameListService,
              private readonly formBuilder: FormBuilder,
              private readonly dialog: MatDialog) {

    this.formGroup = this.formBuilder.group({
      select: 'dateOfCreatingLf'
    })
  }

  ngOnInit(): void {
  }
  openModalDialog(){
    this.dialog.open(ModalDialogComponent,{
      restoreFocus: false,
      width: '488px',
      height: '800px'
    })
  }
}
