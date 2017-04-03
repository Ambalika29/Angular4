import { Component, } from '@angular/core';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingServices]
})
export class NewAccountComponent {
  
  constructor(private accountService: AccountsServices){
    this.accountService.statusUpdated.subscribe((status:string) =>alert('hello world')
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.addAccount(accountName,accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    // this.logger.logAccountStatus(accountStatus);
  }
}
