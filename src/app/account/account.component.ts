import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {SelectItem} from 'primeng/primeng';
import {ApiService} from '../api-service';
import {AccountModel} from '../../models/accountModel';
import {Router} from "@angular/router";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: [
    '../../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../../node_modules/primeng/resources/primeng.min.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './account.component.css',
    '../shared.css'
  ],
  encapsulation: ViewEncapsulation.Native
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

  constructor(private webApi: ApiService, private router: Router) {
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
    return new Promise<string>((resolve, reject) => {
      this.webApi.getAccounts()
        .subscribe(response => {
            this.accounts = response;
            this.selectableAccounts = this.accounts.map(account => {
              return {label: account.name, value: account};
            });
            resolve();
          }, () => {
            resolve();
          });
    });
  }

  selectAccount() {
    this.accountSelected = true;
  }

  navigateToCreateAccountPage() {
    // TODO: Create constant for routes
    this.router.navigate(['Accounts/create']);
  }

}
