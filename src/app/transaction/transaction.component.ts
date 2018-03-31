import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ls-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent {
  public hexadecimalValue: string;

  public dropdownValue: string = '';

  onSubmit(value) {
    alert(`Submit: ${JSON.stringify(value)}`);
  }
}
