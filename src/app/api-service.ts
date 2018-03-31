import { Injectable } from '@angular/core';
import 'rxjs/Rx';
import { Http } from '@angular/http';
import { AccountModel } from '../models/accountModel';
import { Observable } from 'rxjs/Observable';
import { ApiResponse } from '../models/apiResponse';


@Injectable()
export class ApiService {

  private baseUrl = 'http://localhost:54739/api/';

  constructor(private httpService: Http) {

  }

  // TODO: Fix
  public getAccounts() {
    const accountUrl: string = `${this.baseUrl}Accounts`;

    const account: ApiResponse<AccountModel[]> = {
      status: 'Pending',
      data: null
    };

    return this.httpService.get(accountUrl)
      .map(() => {
        return account;
      }).catch(error => error);
  }

  public createAccount(newAccountModel: AccountModel): Promise<ApiResponse<null>> {
    const accountUrl = `${this.baseUrl}Accounts`;
    return this.httpService.post(accountUrl, newAccountModel)
      .toPromise().then(response => {
        return {
          status: response.statusText,
          data: null
        };
      }).catch(error => error);
  }
}
