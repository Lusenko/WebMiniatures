import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  foods: Food[] = [
    {value: '0', viewValue: 'Alphabet (A - Z)'},
    {value: '1', viewValue: 'Alphabet (Z - A)'},
    {value: '3', viewValue: 'Date of Creation (latest first)'},
    {value: '4', viewValue: 'Date of Creation (earliest first)'},
    {value: '5', viewValue: 'Date of Editing (latest first)'},
    {value: '6', viewValue: 'Date of Editing (earliest first)'},
    {value: '7', viewValue: 'Increase of amount of items'},
    {value: '8', viewValue: 'Decrease of amount of items'},
  ];
}
