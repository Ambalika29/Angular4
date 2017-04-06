import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.modal';

export class ShoppingListService{
    private ingredients: Ingredient[] = [new Ingredient('Apple', 5), new Ingredient('Tomatoes', 7), new Ingredient('Onion', 7), new Ingredient('Potato', 7)];
    ingredientsAddedEvent = new Subject<Ingredient[]>();
    startedEditing = new Subject<number>(); 

    getIngredients(){
        return this.ingredients.slice();
    }

    getIngredientById(index: number){
        return this.ingredients[index];
    }

    addIngredients(ingredient: Ingredient){
        this.ingredients.push(ingredient)
        this.ingredientsAddedEvent.next(this.getIngredients());
    }

    addIngredientsBulk(ingredient: Ingredient[]){
        this.ingredients.push(...ingredient);
        this.ingredientsAddedEvent.next(this.getIngredients());
    }

    updateIngredient(index: number, newIngredient: Ingredient){
        this.ingredients[index] = newIngredient;
        this.ingredientsAddedEvent.next(this.getIngredients());

    }
    
    deleteIngredient(index: number){
        this.ingredients.splice(index, 1);
        this.ingredientsAddedEvent.next(this.getIngredients());
    }
    
    
}