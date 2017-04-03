import { Injectable, EventEmitter, Output } from '@angular/core';
import { LoggingServices } from './logging.services';

@Injectable()
export class AccountsServices{
    accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
    @Output() statusUpdated = new EventEmitter<string>(); 

  constructor(private logger: LoggingServices){}

  addAccount(name: string, status: string){
      this.accounts.push({name: name, status: status});
      this.logger.logAccountStatus(status);
  }

  updateAccount(id: number, status: string){
    this.accounts[id].status = status;
    this.logger.logAccountStatus(status);
    this.statusUpdated.emit(status);
  }

}