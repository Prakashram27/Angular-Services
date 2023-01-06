import { Component,Input,Output,EventEmitter } from '@angular/core';
import { accountsServices } from '../accounts.service';
import { LoggingServices } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers:[LoggingServices]
})
export class AccountComponent {
  @Input() account!: {name: string, status: string};
  @Input() id!: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();


  constructor(private loggingServices:LoggingServices,
    private accountservice:accountsServices){}

  onSetTo(status: string) {
    // this.statusChanged.emit({id: this.id, newStatus: status});
    // console.log('A server status changed, new status: ' + status);
    // console.log(this.statusChanged)
    this.accountservice.Statuschanged(this.id,status)
        this.loggingServices.LoggingMessage(status)
  }
}
