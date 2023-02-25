import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http:HttpService) { }

  editUser(id: number, user:any){

    return this.http.put(`${environment.api}/users/${id}`, user)

  }
}
