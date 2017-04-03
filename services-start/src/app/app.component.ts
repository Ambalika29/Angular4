import { Component, OnInit } from '@angular/core';
import { AccountsServices } from './accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  accounts: {name: string, status: string}[] = [];

  constructor(private accountService: AccountsServices){}
  
  ngOnInit(){
    this.accounts = this.accountService.accounts;
  }


}
