import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpService } from './http.service';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectUser } from '../state/selectors/auth.selectors';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Account } from '../interfaces/account';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor( private http: HttpService, private store: Store<AppState> ) { }

  createAccount() {
    return this.store.select(selectUser).pipe(
      switchMap((user) => {
        let account = {
          creationDate: new Date(),
          money: 0,
          isBlocked: false,
          userId: user.id
        }
        return this.http.post(`${environment.api}/accounts`, account)
      })
    )
  }

  getAccounts(): Observable<Account[]> {
    return this.http.get(`${environment.api}/accounts/me`);
  }
}
