import { Component, OnInit } from '@angular/core';
import { ingredient } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:ingredient[] = [
    new ingredient("1", 1),
    new ingredient("2", 2)
  ]
  constructor() { }

  ngOnInit() {
  }

}
