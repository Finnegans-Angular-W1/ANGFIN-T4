import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  addItem(transaction: any){
    const newTransaction = {
      type: 'payment',
      amount: transaction.amount,
      date: transaction.date,
      concept: transaction.concept
    }
    console.log(newTransaction)
  }

}
