import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isVisible: boolean = false;
  logs: Array<Date> = []; 

  onClicked(){
    this.isVisible = !this.isVisible;
    // this.logs.push(this.logs.length);
    this.logs.push(new Date());
  }
}
