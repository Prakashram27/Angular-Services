import { Component, OnInit } from '@angular/core';
import { accountsServices } from './accounts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[accountsServices]
})
export class AppComponent implements OnInit {
  title = 'services';

  accounts : {name:string,status:string}[] = [];

  constructor(private Accountservice  : accountsServices){}

  ngOnInit(){
    this.accounts = this.Accountservice.accounts;


  }

  

  onAddAccount(name: string, status: string) {
    // this.accounts.push(newAccount);
    // // console.log(this.onAccountAdded)
  }

  onStatuschanged(id: number, newStatus: string) {
    // this.accounts[updateInfo.id].status = updateInfo.newStatus;
    // console.log(updateInfo.id);
    // console.log(updateInfo.newStatus)
  }
}
