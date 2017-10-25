import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Http} from '@angular/http';
import {AccountModel} from '../models/accountModel';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class ApiService {

    private baseUrl = 'http://localhost:57713/api/';

    constructor(private httpService: Http) {

    }

    public getAccounts(): Observable<AccountModel> {
        const accountUrl = `${this.baseUrl}Accounts`;
        return this.httpService.get(accountUrl)
            .map(response => <AccountModel>response.json())
            .catch(error => error);
    }
}
