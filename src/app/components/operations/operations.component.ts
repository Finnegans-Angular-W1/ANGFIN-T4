import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/core/interfaces/transaction';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { AppState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  

  dataSource!: Transaction[];

  displayedColumns: string[] = ['amount', 'date', 'accountId', 'concept'];

  
  transactions$: any;

  constructor(private http: HttpClient, private store: Store<AppState>, private transactionsService: TransactionsService) {
    this.transactions$=this.transactionsService.getTransactions()
  }

  ngOnInit(): void {

    this.transactions$.subscribe((transactions:any)=> {
      this.dataSource = transactions;
    }  )

  }


  

}
