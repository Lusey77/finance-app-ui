import { Component, ViewEncapsulation } from '@angular/core';
import { ApiService } from './api-service';
import { NavItem } from '../models/navItem';
import { NotificationService } from './notification/notification.service';
import { animate, state, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('myAwesomeAnimation', [
      state('small', style({
        transform: 'scale(1)',
      })),
      state('large', style({
        transform: 'scale(2.0)',
      })),
      transition('small => large', animate('1000ms ease-in')),
    ]),
  ]
})
export class AppComponent {
  title: string = `Finance Manager`;
  page: string = `Home`;
  navItems: NavItem[] =
    [
      {navTitle: `Accounts`, navLink: `Accounts`},
      {navTitle: `Transactions`, navLink: `Transactions`}
    ];

  constructor(private apiService: ApiService, private service: NotificationService) {
    service.notifySuccess({title: `Please Work`, message: `Please!`});
  }

  getAccounts() {
    this.apiService.getAccounts()
      .subscribe(account => {
        this.title = account[0].name;
      });
  }
}
