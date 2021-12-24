import { Component, OnInit } from '@angular/core';
import {Option} from "./option";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GetGameListService} from "../../../service/get-game-list.service";
import {MatDialog} from "@angular/material/dialog";
import {tap} from "rxjs/operators";
import {CreateCatalogueComponent} from "../create-catalogue/create-catalogue.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  games$ = this.getGameListService.localGame$;
  option = Option
  formGroup: FormGroup;

  constructor(private readonly getGameListService: GetGameListService,
              private readonly formBuilder: FormBuilder,
              private readonly dialog: MatDialog) {

    this.formGroup = this.formBuilder.group({
      select: 'dateOfCreatingLf',
    })
  }

  ngOnInit(): void {
    this.formGroup.get('select')?.valueChanges.pipe(
      tap(item => this.sorted(item))
    ).subscribe();

  }

  delete(id: number){
    this.getGameListService.deleteCatalogue(id);
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
    this.dialog.open(CreateCatalogueComponent, {
      autoFocus: false,
      panelClass: 'create-catalogue',
      width: '488px'
    }).afterClosed().pipe(
      tap(item => this.getGameListService.addCatalogue(item))
    ).subscribe()
  }
}
