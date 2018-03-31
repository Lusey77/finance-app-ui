import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'luse-nav-title',
  templateUrl: './nav-title.component.html',
  styleUrls: ['./nav-title.component.css']
})
export class NavTitleComponent implements OnInit {
  @Input() title: string = 'Home';
  @Input() hoverColor: string = 'Green'; // TODO: Finish later
  @Input() navRoute: string = '/Login';
  @Input() iconPath: string = '../../assets/img/logo.svg'; // TODO: Fix
  @Input() classes: string = ''; // TODO: Finish later
  @Input() styles: string = ''; // TODO: Finish later
  @Input() clickCallback: () => void;

  hover: boolean = false;
  hoverColorHex: string = '#5CB85C';

  constructor() {
  }

  ngOnInit() {

  }

}
