import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Transaction } from 'src/app/core/interfaces/transaction';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.scss']
})
export class OperationsComponent implements OnInit {

  @Input() transactions$!: Observable<Transaction[]>;
  dataSource!: Transaction[];
  displayedColumns: string[] = ['date', 'accountId', 'amount', 'concept'];
  
  constructor() { }

  ngOnInit(): void {

    this.transactions$.subscribe(transactions=> {
      this.dataSource=transactions;
      console.log(transactions)
    }  )

  }

}
