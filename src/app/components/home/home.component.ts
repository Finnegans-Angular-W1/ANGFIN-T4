import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { Observable } from 'rxjs';
import { selectToken, selectUser } from '../../core/state/selectors/auth.selectors';
import { User } from '../../core/interfaces/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  user: Observable<User>;

  constructor(private store: Store<AppState>) {
    this.user = this.store.select(selectUser);
  }
  ngOnInit(): void {
  }


}
