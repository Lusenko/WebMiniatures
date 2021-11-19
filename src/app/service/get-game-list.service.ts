import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {Game} from "../interface/game";

@Injectable({
  providedIn: 'root'
})
export class GetGameListService {

  private gameList = [
    {id: 0, images: 'assets/images/main/gameList/Rectangle1.svg', title: 'All items', quantity: 0},
    {id: 1, images: 'assets/images/main/gameList/Rectangle2.svg', title: 'Grand Alliance Bar', quantity: 0},
    {id: 2, images: 'assets/images/main/gameList/Rectangle3.svg', title: 'Grand Alliance Chaos', quantity: 0},
    {id: 3, images: 'assets/images/main/gameList/Rectangle4.svg', title: 'Grand Alliance Death', quantity: 0}
  ] as Game[];

  private game$ = new BehaviorSubject<Game[]>(this.gameList);
  localGame$ = this.game$.asObservable()

  constructor() { }
}
