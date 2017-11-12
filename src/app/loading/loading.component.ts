import {Component, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [
    '../../../node_modules/primeng/resources/themes/omega/theme.css',
    '../../../node_modules/primeng/resources/primeng.min.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css',
    '../../../node_modules/bootstrap/dist/css/bootstrap.min.css',
    './loading.component.css',
    '../shared.css'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class LoadingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
