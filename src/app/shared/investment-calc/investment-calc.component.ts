import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-investment-calc',
  templateUrl: './investment-calc.component.html',
  styleUrls: ['./investment-calc.component.scss']
})
export class InvestmentCalcComponent implements OnInit {

  monto: number;
  fecha: Date = new Date();
  ganancia: number;

  constructor() { 
    this.monto = 0;
    this.ganancia = 0;
  }

  ngOnInit(): void {
  }

  

  calcularGanancia() {
    const tasa = 0.75;
    const diferencia = Math.abs(this.fecha.getTime() - Date.now());
    const dias = Math.ceil(diferencia / (1000 * 60 * 60 * 24));
    this.ganancia = this.monto * Math.pow(1 + tasa, dias / 365);

  }
}
