import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from '../../core/services/transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.scss']
})
export class DepositMoneyComponent implements OnInit {

  constructor( private transactionsService: TransactionsService, private router: Router, private dialog: MatDialog ) { }

  ngOnInit(): void {
  }

  addItem(transaction: any) {

    const newTransaction = {
      type: 'topup',
      amount: transaction.amount,
      date: transaction.date,
      concept: transaction.concept
    }
    
    this.transactionsService.depositMoney(newTransaction).subscribe({
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
