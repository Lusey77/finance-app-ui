import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { NavItem } from '../../models/navItem';

@Component({
  selector: 'luse-header',
  templateUrl: './header.component.html',
  styleUrls: [
    './header.component.css'
  ]
})
export class HeaderComponent implements OnInit {
  page: string;

  constructor() {
    this.page = 'Home';
  }

  ngOnInit() {
  }

}
