import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-tipoDeCambio',
  templateUrl: './tipoDeCambio.component.html',
  styleUrls: ['./tipoDeCambio.component.css']
})
export class TipoDeCambioComponent implements OnInit {

  exchangeRate: any;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get('https://api.exchangerate-api.com/v4/latest/USD')
    .subscribe(data => {
    // this.currencyService.getExchangeRate(this.baseCurrency, this.targetCurrency)
    // .subscribe((rates : any) => {
      
      this.exchangeRate = data;
    } )
    //   this.exchangeRate = rates;
    // } )
    
  }

}

