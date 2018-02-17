import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: [
    './loading.component.css',
    '../../../node_modules/font-awesome/css/font-awesome.min.css'
  ],
  encapsulation: ViewEncapsulation.Native
})
export class LoadingComponent implements OnInit {
  @Input() icon: string = 'fa-spinner';
  @Input() size: number = 1;
  @Input() picture: string;
  @Input() position: number = 5;
  @Input() modal: boolean = true;
  @Input() visible: boolean = true;
  @Input() height: number;
  @Input() width: number;
  @Input() fill: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  getClass() {
    const classes = [];
    if (!this.picture) {
      classes.push(this.icon);
      if (this.size === 1) {
        return classes;
      } else if (this.size === 2) {
        classes.push('fa-2x');
      } else if (this.size === 3) {
        classes.push('fa-3x');
      } else if (this.size === 4) {
        classes.push('fa-4x');
      } else if (this.size === 5) {
        classes.push('fa-5x');
      }
      return classes;
    }
  }

  getHeight() {
    if (this.fill) {
      return '100%';
    }

    if (this.height) {
      return this.height + 'px';
    }
  }

  getWidth() {
    if (this.fill) {
      return '100%';
    }

    if (this.width) {
      return this.width + 'px';
    }
  }

  iconPosition() {
    switch (this.position) {
      case 1: {
        return 'posTopLeft';
      }
      case 2: {
        return 'posTopCenter';
      }
      case 3: {
        return 'posTopRight';
      }
      case 4: {
        return 'posMiddleLeft';
      }
      case 5: {
        return 'posMiddleCenter';
      }
      case 6: {
        return 'posMiddleRight';
      }
      case 7: {
        return 'posBottomLeft';
      }
      case 8: {
        return 'posBottomCenter';
      }
      case 9: {
        return 'posBottomRight';
      }
      default: {
        return 'posMiddleCenter';
      }
    }
  }
}
