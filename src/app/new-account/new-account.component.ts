import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../logging.service';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers:[LoggingService]
})
export class NewAccountComponent {
  // @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService:LoggingService, private accountService:AccountsService){
    this.accountService.statusUpdated.subscribe(
      (status:string) => alert('Status set to: ' + status)
    );
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    // this.accountAdded.emit({
    //   name: accountName,
    //   status: accountStatus
    // });

    // const service = new LoggingService();    //should not be done!!!!!!!!!
    // service.logStatusChange(accountStatus);
    // console.log('A server status changed, new status: ' + accountStatus);
    this.accountService.addAccount(accountName,accountStatus);

    // this.loggingService.logStatusChange(accountStatus);
  }
}
