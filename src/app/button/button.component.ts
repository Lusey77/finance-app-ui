import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Side } from '../common/side';

@Component({
  selector: 'ls-button',
  template: `
    <button
      [attr.type]="type"
      [class]="class"
      [style]="style"
      [disabled]="disabled"
      (click)="onClick.emit($event)"
      (focus)="onFocus.emit($event)"
      (blur)="onBlur.emit($event)"
      [ngClass]="{'ls-button ls-corner-all': true}">

    <span
      [ngClass]="{'ls-icon-right': (iconPos === 'right'),
                  'ls-icon-left': (iconPos === 'left')}"
      [class]="icon">

    </span>

      <span>
        {{label}}
      </span>

    </button>`,
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input() icon: string;

  @Input() iconPos: Side = 'right';

  @Input() disabled: boolean;

  @Input() label: string;

  @Input() class: string;

  @Input() style: string;

  @Input() type: string;

  @Output() onClick: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

}
