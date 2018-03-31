import { Component, OnInit } from '@angular/core';
import { NavItem } from '../../models/navItem';

@Component({
  selector: 'luse-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  constructor() {
  }

  isCollapsed: boolean = true;

  ngOnInit() {
  }
}
