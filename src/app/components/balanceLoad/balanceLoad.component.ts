import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ExpensesService } from 'src/app/core/services/expenses.service';

@Component({
  selector: 'app-balanceLoad',
  templateUrl: './balanceLoad.component.html',
  styleUrls: ['./balanceLoad.component.css']
})
export class BalanceLoadComponent implements OnInit {

  constructor(private expensesService: ExpensesService) { }

  ngOnInit() {

  }
  addItem(transaction: any){
  }

}
