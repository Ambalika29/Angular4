import { OnInit, EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shoppling-list.service';

@Injectable()
export class RecipeService{
    public recipeSelectedEvent = new EventEmitter<Recipe>();
    private recipes: Recipe[] = [
    new Recipe(
        'Chicken Tikka Masala', 
        'Test Recipe Description 1', 
        'http://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2014/10/iStock_000026876801_Small.jpg',
        [
            new Ingredient('Chicken', 1),
            new Ingredient('Onion', 5)
        ]
        ),
    new Recipe(
        'Veg Pulao', 
        'Test Recipe Description 2', 
        'http://mitrandadhaba.com/wp-content/uploads/2015/03/Vegetable-Pulav1.jpg',
        [
            new Ingredient('Rice' ,1),
            new Ingredient('ghee', 1)
        ])
  ];

  constructor(private slService: ShoppingListService){}

  getRecipes(){
      return this.recipes.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredient[]){
    this.slService.addIngredientsBulk(ingredients);
  }
    
}