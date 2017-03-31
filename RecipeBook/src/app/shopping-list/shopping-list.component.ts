import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.modal';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apple', 5),
    new Ingredient('Tomatoes', 7),
    new Ingredient('Onion', 7),
    new Ingredient('Potato', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

  onNewIngredientAdded(onNewIngredient:Ingredient){
    this.ingredients.push(onNewIngredient);
  }

}
