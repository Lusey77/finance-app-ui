import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../api-service';
import { AccountModel } from '../../../models/accountModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  newAccountForm: FormGroup;
  creatingAccount: boolean = false;

  constructor(private formBuilder: FormBuilder,
              private webApi: ApiService,
              private router: Router) {
  }


  ngOnInit() {
    this.newAccountForm = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      balance: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required)
    });
  }

  async createAccount(newAccountModel: AccountModel) {
    this.creatingAccount = true;
    try {
      const apiResponse = await this.webApi.createAccount(newAccountModel);
      if (apiResponse.status !== 'ok') {
        console.warn('Something went wrong');
      } else {
      }
    } catch (error) {
      console.error(error);
    } finally {
      this.creatingAccount = false;
      this.router.navigate(['Accounts']);
    }
  }

  accountNameExists(control: AbstractControl): void {
  }
}
