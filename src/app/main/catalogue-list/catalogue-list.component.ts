import {Component, Inject, OnInit} from '@angular/core';
import {GetGameListService} from "../../service/get-game-list.service";
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
    this.formGroup.get('select')?.valueChanges.pipe(
      tap(item => this.sorted(item))
    ).subscribe()
  }

  sorted(word:string){
    switch (word){
      case 'az': this.sortByAZ()
        break;
      case 'za': this.sortByZA()
        break;
      case 'increaseAmount': this.sortByAmount()
        break;
    }
  }

  sortByAZ(){
    this.getGameListService.localGame$.pipe(
      tap(item => item.sort((a,b) => a.title.localeCompare(b.title)))
    ).subscribe()
  }

  sortByZA(){
    this.getGameListService.localGame$.pipe(
      tap(item => item.sort((a,b) => b.title.localeCompare(a.title)))
    ).subscribe()
  }

  sortByAmount(){
    this.getGameListService.localGame$.pipe(
      tap(item => item.sort((a,b) => a.quantity - b.quantity))
    ).subscribe()
  }


  openModalDialog(){
    this.dialog.open(ModalDialogComponent, {
      autoFocus: false,
      panelClass: 'modal-dialog',
      width: '488px'
    }).afterClosed().pipe(
      tap(item => this.getGameListService.addCatalogue(item))
    ).subscribe()
  }
}
