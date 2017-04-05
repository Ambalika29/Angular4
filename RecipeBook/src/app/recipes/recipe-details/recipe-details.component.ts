import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {
  selectedRecipe:Recipe
  id: number;
  constructor(private recipeService: RecipeService, private activeRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activeRoute.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.selectedRecipe = this.recipeService.getRecipeById(this.id);
      }
    );
  }

  OnAddToShoppingList(){
    this.recipeService.addIngredientToShoppingList(this.selectedRecipe.ingredients);
  }

  onEditRecipe(){
    this.router.navigate(['edit'], {relativeTo: this.activeRoute});
  }

}
