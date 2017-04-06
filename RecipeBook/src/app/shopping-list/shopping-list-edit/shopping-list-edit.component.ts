import { Component, OnInit, OnDestroy, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.modal';
import { ShoppingListService } from '../shoppling-list.service'; 

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm: NgForm;
  editSubscription: Subscription;
  editMode: boolean = false;
  editItemIndex : number;
  editItem: Ingredient;
  
  constructor(private shopingListService: ShoppingListService) { }

  ngOnInit() {
    this.editSubscription = this.shopingListService.startedEditing.subscribe(
      (index:number) =>{
        this.editItemIndex = index;
        this.editMode = true;
        this.editItem = this.shopingListService.getIngredientById(index);
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount
        });
      }
    );
  }

  ngOnDestroy(){
    this.editSubscription.unsubscribe();
  }

  onSubmit(formData: NgForm){
    const value = formData.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if(this.editMode){
      this.shopingListService.updateIngredient(this.editItemIndex, newIngredient);
    }else{
      this.shopingListService.addIngredients(newIngredient);
    }
    this.editMode = false;
    formData.reset();  
  }

  onClear(){
    this.editMode = false;
    this.slForm.reset();
  }

   onDelete(index: number){
     this.onClear();
    this.shopingListService.deleteIngredient(index);
  }


}
