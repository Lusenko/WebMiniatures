import {Component, OnDestroy, OnInit} from '@angular/core';
import {Option} from "./option";
import {FormBuilder, FormGroup} from "@angular/forms";
import {GetGameListService} from "../../../service/get-game-list.service";
import {MatDialog} from "@angular/material/dialog";
import {takeUntil, tap} from "rxjs/operators";
import {CreateCatalogueComponent} from "../create-catalogue/create-catalogue.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, OnDestroy {

  games$ = this.getGameListService.localGame$;
  destroy$ = new Subject();
  option = Option
  formGroup: FormGroup;

  constructor(private readonly getGameListService: GetGameListService,
              private readonly formBuilder: FormBuilder,
              private readonly dialog: MatDialog) {

    this.formGroup = this.formBuilder.group({
      select: 'dateOfCreatingLf',
      searchInput: ''
    })
  }

  ngOnInit(): void {
    this.formGroup.get('select')?.valueChanges.pipe(
      tap(item => this.sorted(item)),
      takeUntil(this.destroy$)
    ).subscribe();

  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
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
      tap(item => item.sort((a,b) => a.title.localeCompare(b.title))),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  sortByZA(){
    this.getGameListService.localGame$.pipe(
      tap(item => item.sort((a,b) => b.title.localeCompare(a.title))),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  sortByAmount(){
    this.getGameListService.localGame$.pipe(
      tap(item => item.sort((a,b) => a.quantity - b.quantity)),
      takeUntil(this.destroy$)
    ).subscribe()
  }


  openModalDialog(){
    this.dialog.open(CreateCatalogueComponent, {
      autoFocus: false,
      panelClass: 'create-catalogue',
      width: '488px'
    }).afterClosed().pipe(
      tap(item => this.getGameListService.addCatalogue(item)),
      takeUntil(this.destroy$)
    ).subscribe()
  }
}
