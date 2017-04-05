import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient} from '../shared/ingredient.modal';
import { ShoppingListService } from './shoppling-list.service'; 

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  ingredientSubscription : Subscription;

  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
    this.ingredients = this.shopingListService.getIngredients();
    this.ingredientSubscription = this.shopingListService.ingredientsAddedEvent.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }

  ngOnDestroy(){
    this.ingredientSubscription.unsubscribe();
  }



}
