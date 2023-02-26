import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectUser } from '../../core/state/selectors/auth.selectors';
import { TransactionsService } from 'src/app/core/services/transactions.service';

@Component({
  selector: 'app-transactions-list',
  templateUrl: './transactions-list.component.html',
  styleUrls: ['./transactions-list.component.scss']
})
export class TransactionsListComponent implements OnInit {

  transactions$: any;

  constructor(private http: HttpClient, private store: Store<AppState>, private transactionsService: TransactionsService) {
    this.transactions$=this.transactionsService.getTransactions()
  }

  ngOnInit() {}
}