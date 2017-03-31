import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isOddEvent: boolean;
  events:number[] = [];

  onCounterEvent(eventData: number){
    this.events.push(eventData);
  }

  isOdd(data: number){
    return data%2;
  }
}
