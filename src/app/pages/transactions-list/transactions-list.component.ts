import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectToken, selectUser } from '../../core/state/selectors/auth.selectors';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/core/interfaces/transaction';
import { MatCardLgImage } from '@angular/material/card';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  userId: any = 0;
  transactions$: any;

  constructor(private http: HttpClient, private store: Store<AppState>, private transactionsService: TransactionsService) {

    this.transactions$=this.transactionsService.getTransactions()
    
  }

  ngOnInit() {

    this.store.select(selectToken).subscribe(token => console.log(token));

    this.store.select(selectUser)
      .subscribe(user => {
        this.userId = user.id;
        console.log(user)
      });
  }

  /*getTransactions() {
    this.http.get<any[]>('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions')
      .subscribe((transactions: any) => {
        console.log(transactions.data)
        this.transactions$ = transactions.data
          .filter((transaction: any) => transaction.userId === this.userId)
          .sort((a: any, b: any) => {
            const dateA = Date.parse(a.date);
            const dateB = Date.parse(b.date);
            return dateB - dateA;
          });
      });*/


  
}