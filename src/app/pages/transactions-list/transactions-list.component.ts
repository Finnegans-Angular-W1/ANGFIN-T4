import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import {selectUserId} from '../../core/state/selectors/auth.selectors'

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  constructor(private http: HttpClient, private store: Store<AppState>) { 
    
  }

  transactions: any[] = [];
  userId: number = 0;

  ngOnInit() {
    
    this.store.select(selectUserId)
      .subscribe(userId => {
        this.userId = userId;
        this.getTransactions();
      });
  }

  getTransactions() {
    this.http.get<any[]>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions')
      .subscribe(transactions => {
        this.transactions = transactions
          .filter(transaction => transaction.userId === this.userId)
          .sort((a, b) => {
            const dateA = Date.parse(a.date);
            const dateB = Date.parse(b.date);
            return dateB - dateA;
          });
      });
  }
}