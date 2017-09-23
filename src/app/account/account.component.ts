import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AccountModel} from "../../models/accountModel";
import {SelectItem} from "primeng/primeng";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css', '../shared.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountComponent implements OnInit {
  // Represents whether the user has selected an account to view
  accountNotSelected: boolean = true;
  // Represents if the page is in a loading state of not
  loading: boolean = true;
  // Represents all of the active accounts
  accounts: AccountModel[] = [];
  selectableAccounts: SelectItem[] = [];
  selectedAccount: string;

  constructor() { }

  loadDelay(ms: number): Promise<any> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  ngOnInit() {
    this.loadDelay(1000).then(() => {this.loading = false});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
    this.selectableAccounts.push({label:'New York', value:{id:1, name: 'New York', code: 'NY'}});
  }

}
