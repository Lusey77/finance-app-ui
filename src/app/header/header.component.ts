import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {NavItem} from '../../models/navItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
    '../../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../../node_modules/primeng/resources/primeng.min.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './header.component.css',
    '../shared.css'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class HeaderComponent implements OnInit {
  @Input() title: string;
  @Input() page: string;
  @Input() navItems: NavItem[];

  constructor() { }

  ngOnInit() {
  }

}
