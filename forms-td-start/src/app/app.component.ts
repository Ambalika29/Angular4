import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signUpForm: NgForm
  defaultQuestion: string = 'pet';
  secretAnswer: string = '';
  gender:string = "female";
  genders: string[] = ['male', 'female'];

  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signUpForm.form.patchValue({
      userdata:{
        username: suggestedName
      }
    }); 
  }

  onSubmit(formData: NgForm){
    console.log(formData);
  }
}
