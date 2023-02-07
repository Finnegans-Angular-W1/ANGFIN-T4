import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, observable } from 'rxjs';

@Injectable({
    providedIn: "root"
})
export class CurrencyService {
getCurrencyService: any;

constructor(private http: HttpClient) {}

getExchangeRate(baseCurrency: string, targetCurrency: string): Observable<number>{
    return this.http.get<number | any >(`https://v6.exchangerate-api.com/v6/55b3dc38799864c9e8a41f19/latest/USD${baseCurrency}`)
    .pipe(map(rates => rates [targetCurrency]));
}

}
