import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';

import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  isEditMode: boolean = false;
  recipeForm: FormGroup;

  constructor(private router: ActivatedRoute, private recipeService: RecipeService) { }

  ngOnInit() {
    this.router.params.subscribe(
      (param: Params) => {
        this.id = +param['id'];
        this.isEditMode = param['id'] != null;
        this.initForm();
      }
    );

  }

  private initForm(){
    let recipeName = '';
    let recipeImgPath = '';
    let recipeDescription = '';

    if(this.isEditMode){
      const recipe = this.recipeService.getRecipeById(this.id);
      recipeName = recipe.name;
      recipeImgPath = recipe.imgPath;
      recipeDescription = recipe.desc;
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipeName),
      'imagePath': new FormControl(recipeImgPath),
      'description': new FormControl(recipeDescription)
    });
  }

  onSubmit(){
    console.log(this.recipeForm);
  }

}
