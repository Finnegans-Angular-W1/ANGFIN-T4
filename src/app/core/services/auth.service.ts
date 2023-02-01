import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isLoggedIn() {
    const token = localStorage.getItem('user_token');
    if (!token) {
      return false;
    }
    return true;
  }
}
