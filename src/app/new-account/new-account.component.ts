import { Component,Output,EventEmitter } from '@angular/core';
import { accountsServices } from '../accounts.service';
import { LoggingServices } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingServices]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingServices,
    private accountService : accountsServices){}

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountService.accountAdded(accountName,accountStatus);
    this.loggingService.LoggingMessage(accountStatus)
    // const service = new LoggingServices;
    // service.LoggingMessage(accountStatus)  // Not a proper method


    // console.log('A server status changed, new status: ' + accountStatus);
 
    this.loggingService.LoggingMessage(accountStatus)

    
  }

}
