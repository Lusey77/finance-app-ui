import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'luse-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.css']
})
export class NavItemComponent implements OnInit {
  @Input() title: string = 'Home';
  @Input() hoverColor: string = 'Green'; // TODO: Finish later
  @Input() navRoute: string = '/';
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
