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
    return this.http.get<number | any >(`"base":"ARS","last_updated":1675689300,"exchange_rates":{"USD":0.013286}${baseCurrency}`)
    .pipe(map(rates => rates [targetCurrency]));
}
}
