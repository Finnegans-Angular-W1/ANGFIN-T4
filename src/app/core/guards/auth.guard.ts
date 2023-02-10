import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { select, Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectToken } from '../state/selectors/auth.selectors';
import { map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor( private auth: AuthService, private router: Router, private store: Store<AppState> ) {}
  
  canActivate(): Observable<boolean> {
    return this.store.select(selectToken).pipe(
      map((token) => {
        if (!token) {
          this.router.navigateByUrl('/login');
          return false;
        }
        return true;
      })
    )
  }
}
