import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {
  [x: string]: any;
  getExchangeRate: any;

  constructor( private http: HttpClient ) { }

  convert( base: string, target: string ) {
    return this.http.get(environment.endpoints.currency.convert(base, target));
  }
}
