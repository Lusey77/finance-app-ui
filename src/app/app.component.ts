import {Component, ViewEncapsulation} from '@angular/core';
import { ApiService } from './api-service';
import { NavItem } from '../models/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    '../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../node_modules/primeng/resources/primeng.min.css',
    '../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './app.component.css',
    './shared.css'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class AppComponent {
  title: string = `Finance Manager`;
  page: string = `Home`;
  navItems: NavItem[] =
    [
      {navTitle: `Accounts`, navLink: `Accounts`},
      {navTitle: `Transactions`, navLink: `Transactions`}
    ];

  constructor(private apiService: ApiService) {
  }

  getAccounts() {
    this.apiService.getAccounts()
      .subscribe(account => {
        this.title = account[0].name;
      });
  }
}
