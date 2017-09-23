import {Component, Input, OnInit} from '@angular/core';
import {NavItem} from "../../models/navItem";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() page: string;
  @Input() navItems: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
