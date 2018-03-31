import { Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { ApiService } from '../api-service';
import { AccountModel } from '../../models/accountModel';
import { Router } from '@angular/router';
import { NotificationService } from '../notification/notification.service';
import { NotifyComponent } from '../notify/notify.component';
import { NotificationSeverity } from '../notification/i.notification.model';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // Represents whether the user has selected an account to view
  accountSelected = false;

  // Represents if the page is in a loading state of not
  loading = false;

  // Represents all of the active accounts
  accounts: AccountModel[] = [];

  // Represents the accounts for the dropdown
  selectableAccounts: SelectItem[] = [];
  selectedAccount: AccountModel;


  data: any;

  constructor(private webApi: ApiService, private router: Router, private service: NotificationService) {
    this.data = {
      labels: ['A', 'B', 'C'],
      datasets: [
        {
          data: [300, 50, 100],
          backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ],
          hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
          ]
        }]
    };
  }

  async ngOnInit() {
    this.loading = true;
    await this.loadAccounts();
    this.loading = false;
  }

  loadAccounts() {
    // return new Promise<string>((resolve, reject) => {
    //   this.webApi.getAccounts()
    //     .subscribe(response => {
    //         this.accounts = response;
    //         this.selectableAccounts = this.accounts.map(account => {
    //           return {label: account.name, value: account};
    //         });
    //         resolve();
    //       }, () => {
    //         resolve();
    //       });
    // });
  }

  selectAccount() {
    this.accountSelected = true;
  }

  success() {
    this.service.notifySuccess({title: `Success`, message: `Successfully signed in!`});
  }

  warning() {
    this.service.notifyWarning({title: `Warning`, message: `Could not find the requested item!`});
  }

  info() {
    this.service.notifyInfo({title: `Info`, message: `Your password is about to expire`});
  }

  error() {
    this.service.notifyError({title: `Error`, message: `Server Error`});
  }

  clear() {
    this.service.clearNotifications();
  }

  navigateToCreateAccountPage() {
    // TODO: Create constant for routes
    // this.router.navigate(['Accounts/create']);
    this.service.notifySuccess({title: `Work`, message: `work`});

  }

}
