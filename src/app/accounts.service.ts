import { Injectable } from "@angular/core";

@Injectable()
export class accountsServices {
  updateStatus(id: number, status: string) {
    throw new Error('Method not implemented.');
  }
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

      
  accountAdded(name: string, status: string) {
    this.accounts.push({name:name,status:status});
    // console.log(this.onAccountAdded)
  }

  Statuschanged(id: number, Status: string) {
    this.accounts[id].status = Status;
    // console.log(updateInfo.id);
    // console.log(updateInfo.newStatus)
  }
}