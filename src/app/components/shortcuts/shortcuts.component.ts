import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { AccountsService } from '../../core/services/accounts.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';

@Component({
  selector: 'app-shortcuts',
  templateUrl: './shortcuts.component.html',
  styleUrls: ['./shortcuts.component.scss']
})
export class ShortcutsComponent implements OnInit {

  constructor( private store: Store<AppState>, private accountsService: AccountsService, private dialog: MatDialog, private router: Router ) { }

  ngOnInit(): void {
  }

  createAccount() {

    this.accountsService.getAccounts().subscribe(accounts => {
      if (accounts.length > 0) {
        this.dialog.open(
          AlertComponent, {
            data: {
              title: 'Error',
              message: 'Solo se puede crear una cuenta en este momento, disculpe las molestias.',
            }
          }
        )
      } else {
        this.accountsService.createAccount().subscribe({
          next: (resp) => {
            this.dialog.open(
              AlertComponent, {
                data: {
                  title: 'Completado',
                  message: 'La cuenta se creó exitosamente',
                }
              }
            )
          },
          error: err => {
            this.dialog.open(
              AlertComponent, {
                data: {
                  title: 'Error al crear la cuenta',
                  message: err.error.error,
                }
              }
            )
          }
        })
      }
    });
  }

  changePassword() {
    this.router.navigateByUrl('/cambiar-password');
  }

  editProfile() {
    this.router.navigateByUrl('/editar-perfil');
  }

  depositMoney() {
    this.router.navigateByUrl('/depositar-dinero');
  }

  sendMoney() {
    this.router.navigateByUrl('/enviar-dinero');
  }

  showTransactions() {
    this.router.navigateByUrl('/ingresos');
  }

}
