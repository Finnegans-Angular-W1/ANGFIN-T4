import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../../core/services/transactions.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';

@Component({
  selector: 'app-money-transfer',
  templateUrl: './money-transfer.component.html',
  styleUrls: ['./money-transfer.component.scss']
})
export class MoneyTransferComponent implements OnInit {

  constructor( private transactionsService: TransactionsService, private router: Router, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addItem(transaction: any) {

    const newTransaction = {
      type: 'payment',
      amount: transaction.amount,
      date: transaction.date,
      concept: transaction.concept
    }
    
    this.transactionsService.sendMoney(newTransaction).subscribe({
        next: (resp) => this.router.navigateByUrl('/home'),
        error: err => {
          this.dialog.open(
            AlertComponent, {
              data: {
                title: 'Error al realizar la transacción',
                message: err.error.error,
              }
            }
          )
        }
      }
    )
  }

}
