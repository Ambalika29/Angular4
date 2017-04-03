import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.modal';

export class ShoppingListService{
    private ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 7), new Ingredient('Onion', 7), new Ingredient('Potato', 7)];
    ingredientsAddedEvent = new EventEmitter<Ingredient[]>();

    getIngredients(){
        return this.ingredients.slice();
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsAddedEvent.emit(this.getIngredients());
    }

    addIngredientsBulk(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsAddedEvent.emit(this.getIngredients());
    }

    
    
}