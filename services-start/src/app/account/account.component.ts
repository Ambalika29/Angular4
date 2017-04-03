import { Component, EventEmitter, Input } from '@angular/core';
// import { LoggingServices } from '../logging.services';
import { AccountsServices } from '../accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  // providers: [LoggingServices]
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;

  constructor(private accountService: AccountsServices){}


  onSetTo(status: string) {
    this.accountService.updateAccount(this.id, status);
    // this.logger.logAccountStatus(status);
    // console.log('A server status changed, new status: ' + status);
  }
}
