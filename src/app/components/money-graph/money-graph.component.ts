import { Component, OnInit } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-money-graph',
  templateUrl: './money-graph.component.html',
  styleUrls: ['./money-graph.component.scss'],
})
export class MoneyGraphComponent implements OnInit {
   
  
  single: { name: string, value: number }[] = [];
  view: [number,number] = [0, 0];

  // opciones del gráfico
  showLegend: boolean = false;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  showGridLines: boolean = false;
  xAxisLabel: string = 'Fecha';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Dinero';
  barPadding: number = 50;
  roundEdges: boolean = true;
  animations: boolean = true;
  
  

  // configuración de colores
  colorScheme: Color = {
    name: 'rosado',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: [
      '#f06292',
      '#ec407a',
      '#e91e63',
      '#d81b60',
      '#c2185b',
      '#ad1457',
      '#880e4f',
      '#ff80ab',
      '#ff4081',
      '#f50057',
      '#c51162'
    ]
  };
  
  

  // gradiente de colores
  gradient: boolean = false;

  



 

  constructor(private store: Store<AppState>, private transactionsService: TransactionsService) {}

  ngOnInit() {
    this.transactionsService.getTransactions().subscribe((transactions:any[]) => {
      
      // Agrupar las transacciones por fecha y tipo
      const grouped: { [name: string]: { topup: number, payment: number } } = transactions.reduce((acc, t) => {
        const date = t.date.split('T')[0];
        const type = t.type;
        const amount = parseFloat(t.amount);
        if (!acc[date]) {
          acc[date] = {};
        }
        if (!acc[date][type]) {
          acc[date][type] = 0;
        }
        acc[date][type] += amount;
        return acc;
      }, {});
  
      // Convertir el objeto agrupado a un array de objetos
      const data = Object.entries(grouped).map(([name, { topup, payment }]) => ({ name, topup, payment, value: topup - payment }));
  
      // Ordenar los datos por fecha
      data.sort((a, b) => a.name.localeCompare(b.name));
  
      // Sumar los valores de los días anteriores
      let sum = data[0].value;
      for (let i = 1; i < data.length; i++) {
        sum += data[i].value;
        data[i].value = sum;
      }
  
      // Asignar los datos al gráfico
      this.single = data.map(({ name, value }) => ({ name, value }));
      
    });
  }
  

}
