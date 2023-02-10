import { Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from "rxjs/operators";
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { selectToken } from '../state/selectors/auth.selectors';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'

  constructor( private http: HttpClient, private router: Router, private store: Store<AppState> ) { }

  login( user: User ): Observable<string> {
    return this.http.post(`${this.url}/auth/login`, user).pipe(
      map((resp: any) => resp.accessToken)
    );
  }

  register( user: User ) {
    return this.http.post(`${this.url}/users`, user);
  }

  getUserDetails() {
    return this.store.select(selectToken).pipe(
      switchMap((token) => {
        return this.http.get(`${this.url}/auth/me`, {headers: {'Authorization': 'Bearer ' + token}})
      })
    )
  }

  setSession(token: string) {
    localStorage.setItem('user_token', token);
  }

  logout() {
    localStorage.removeItem('user_token');
    this.router.navigateByUrl('/login');
  }

  isLoggedIn() {
    const token = localStorage.getItem('user_token');
    if (!token) {
      return false;
    }
    return true;
  }
}
