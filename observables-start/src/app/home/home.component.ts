import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numSubscription: Subscription;
  customSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000);
    this.numSubscription = myNumbers.subscribe(
      (number: Number) =>{
        console.log(number);
      }
    );

    const myObservable = Observable.create((observer:Observer<string>) => {
      setTimeout(()=>{observer.next("First Package")},2000);
      setTimeout(()=>{observer.next("Second Package")},4000);
      // setTimeout(()=>{observer.error("error")},5000);
      setTimeout(()=>{observer.complete()}, 6000);
    });

    this.customSubscription = myObservable.subscribe(
      (data: string)=>{console.log(data)},
      (error: string)=>{console.log(error)},
      ()=>{console.log('complete')}
    );


  }

  ngOnDestroy(){
    this.numSubscription.unsubscribe();
    this.customSubscription.unsubscribe();
  }

}
