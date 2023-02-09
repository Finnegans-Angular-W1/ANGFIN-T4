import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency.service';

@Component({
  selector: 'app-tipoDeCambio',
  templateUrl: './tipoDeCambio.component.html',
  styleUrls: ['./tipoDeCambio.component.css']
})
export class TipoDeCambioComponent implements OnInit {
  baseCurrency = "USD";
  targetCurrency = "ARG";
  exchangeRate! : number;
  

  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    // this.currencyService.getExchangeRate(this.baseCurrency, this.targetCurrency)
    // .subscribe((rates : any) => {
      
    //   this.exchangeRate = rates;
    // } )
    
  }

}

