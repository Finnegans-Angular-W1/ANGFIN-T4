import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from '../../core/services/transactions.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';
import { AccountsService } from '../../core/services/accounts.service';

@Component({
  selector: 'app-deposit-money',
  templateUrl: './deposit-money.component.html',
  styleUrls: ['./deposit-money.component.scss']
})
export class DepositMoneyComponent implements OnInit {

  accountId = 0;

  constructor( private transactionsService: TransactionsService, private router: Router, private dialog: MatDialog, private accountsService: AccountsService ) { }

  ngOnInit(): void {
    this.accountsService.getAccounts().subscribe((accounts) => this.accountId = accounts[0].id);
  }

  addItem(transaction: any) {

    const newTransaction = {
      type: 'topup',
      amount: transaction.amount,
      date: transaction.date,
      concept: transaction.concept
    }
    
    this.transactionsService.depositMoney(this.accountId, newTransaction).subscribe({
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
