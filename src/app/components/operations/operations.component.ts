import { Component, OnInit } from '@angular/core';
import { Transaction } from 'src/app/core/interfaces/transaction';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  dataSource!: Transaction[];
  displayedColumns: string[] = ['amount', 'date', 'accountId', 'concept'];
  transactions$: any;
  routeName: string;
  loading = true;

  constructor( private transactionsService: TransactionsService, private router: Router) {
    this.transactions$=this.transactionsService.getTransactions();
    this.routeName = this.router.url;
  }

  ngOnInit(): void {

    this.transactions$.subscribe((transactions:any)=> {
      this.dataSource = transactions;
      this.loading = false;
    }  )

  }


  

}
