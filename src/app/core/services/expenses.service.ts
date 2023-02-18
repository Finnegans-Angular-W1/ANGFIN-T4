import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ExpensesService {
    private apiUrl = 'http://wallet-main.eba-ccwdurgr.us-east-1.elasticbeanstalk.com'

constructor(private http: HttpClient) { }

uploadExpenses(expense:any): Observable<any>{
    return this.http.post(`${this.apiUrl}/transactions`, expense)
}

}
