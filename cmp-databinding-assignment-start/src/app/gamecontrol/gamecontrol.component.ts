import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-gamecontrol',
  templateUrl: './gamecontrol.component.html',
  styleUrls: ['./gamecontrol.component.css']
})
export class GamecontrolComponent implements OnInit {
  @Output() counterEvent = new EventEmitter<number>();
  count:number = 0;
  interval;
  constructor() { }

  ngOnInit() {
  }

  onStartClicked(){
    console.log('start clicked');
    this.interval = setInterval(()=>{this.emitCounter()},1000);
  }

  onStopClicked(){
    console.log('stop clicked');
    clearInterval(this.interval);
  }

  emitCounter(){
    this.counterEvent.emit(this.count++);
    console.log(this.count);
  }

}
