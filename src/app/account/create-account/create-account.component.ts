import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: [
    '../../../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../../../node_modules/primeng/resources/primeng.min.css',
    '../../../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './create-account.component.css',
    '../../shared.css'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
