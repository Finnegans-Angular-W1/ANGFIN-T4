import { Component, OnInit } from '@angular/core';
import { CurrencyService } from 'src/app/core/services/currency.service';

@Component({
  selector: 'app-tipoDeCambio',
  templateUrl: './tipoDeCambio.component.html',
  styleUrls: ['./tipoDeCambio.component.css']
})
export class TipoDeCambioComponent implements OnInit {
public valorCompra: string = "";
public valorVenta: string = "";


  constructor(private currencyService: CurrencyService) { }

  ngOnInit() {
    this.getValores()
     } 
     getValores(){
      this.currencyService.getExchangeRate().subscribe(
        (        res: { casa: {
          compra: string; venta: string; 
}; }[]) =>{
          this.valorCompra = res[0].casa.compra;
          this.valorVenta = res[0].casa.venta;
        }
      )
     }
    
  }


