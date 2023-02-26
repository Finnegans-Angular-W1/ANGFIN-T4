import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Transaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {

  private url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }

  getTransactions() {

    return this.http.get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions').pipe(
      map((res: any)=> res.data)
    )
  }

  sendMoney( transaction: any ) {
    return this.http.post(`${this.url}/accounts/4`, transaction);
  }

  depositMoney( id: number, transaction: any ) {
    return this.http.post(`${this.url}/accounts/${id}`, transaction);
  }

}
