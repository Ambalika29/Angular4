import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Chicken Tikka Masala', 'Test Recipe Description 1', 'http://d1dd4ethwnlwo2.cloudfront.net/wp-content/uploads/2014/10/iStock_000026876801_Small.jpg'),
    new Recipe('Veg Pulao', 'Test Recipe Description 2', 'http://mitrandadhaba.com/wp-content/uploads/2015/03/Vegetable-Pulav1.jpg')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipeItem: Recipe){
    this.recipeWasSelected.emit(recipeItem);
  }

}
