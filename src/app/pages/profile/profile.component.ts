import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, EMPTY } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selectors/auth.selectors';
import { AccountsService } from '../../core/services/accounts.service';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';
import { Router } from '@angular/router';
import { concatMap } from 'rxjs/operators';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  user: Observable<User>;
  usuario!: User;
  accountMoney!: number;
  constructor(private store: Store<AppState>, private accountsService: AccountsService ) { 
    this.user = this.store.select(selectUser);
    this.user.subscribe(user => this.usuario = user);
    this.accountsService.getAccounts().subscribe((accounts) => this.accountMoney = accounts[0].money);
  }

  ngOnInit(): void {
  }
}
