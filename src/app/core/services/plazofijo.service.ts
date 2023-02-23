import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class plazoFijoService {

  private url = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'

  constructor(private http: HttpClient) { }

  getTransactions() {

    return this.http.get('http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com/transactions').pipe(
      map((res: any)=> res.data)
    )
  }

  

}