import { Component, OnInit } from '@angular/core';
import {GetGameListService} from "../../service/get-game-list.service";
import {Game} from "../../interface/game";
import {tap} from "rxjs/operators";

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

  games: Game[] = [];

  constructor(private readonly getGameListService: GetGameListService) { }

  ngOnInit(): void {
    this.getGameListService.localGame$.pipe(
      tap(item => this.games = item)
    ).subscribe()
  }

}
