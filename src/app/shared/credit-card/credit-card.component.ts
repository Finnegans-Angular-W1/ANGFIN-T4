import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selectors/auth.selectors';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.scss']
})
export class CreditCardComponent implements OnInit {

  user: Observable<User>;
  usuario!: User;

  constructor(private store: Store<AppState> ) { 

    this.user = this.store.select(selectUser);
    this.user.subscribe(user => this.usuario = user);

  }

  ngOnInit(): void {
  }

}
