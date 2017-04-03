import { Component, OnInit } from '@angular/core';
import { Ingredient} from '../shared/ingredient.modal';
import { ShoppingListService } from './shoppling-list.service'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
    this.shopingListService.ingredientsAddedEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
  onNewIngredientAdded(onNewIngredient:Ingredient){
    
  }

}
