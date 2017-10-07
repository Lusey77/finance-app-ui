import { Component } from '@angular/core';
import { ApiService } from './api-service';
import { NavItem } from '../models/navItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = `Finance Manager`;
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
        this.title = account[0].Name;
      });
  }
}
