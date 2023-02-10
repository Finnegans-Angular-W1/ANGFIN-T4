import { Component, Inject, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selectors/auth.selectors';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  user: Observable<User>;
  usuario!: User;

  constructor(private store: Store<AppState> ) { 
    this.user = this.store.select(selectUser);
    this.user.subscribe(user => this.usuario = user);

  }

  ngOnInit(): void {
  }
}
