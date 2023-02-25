import { Component, OnInit } from '@angular/core';
import { NgxChartsModule }from '@swimlane/ngx-charts';
import { TransactionsService } from 'src/app/core/services/transactions.service';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectUser } from '../../core/state/selectors/auth.selectors';
import { Color, ScaleType } from '@swimlane/ngx-charts';

@Component({
  selector: 'app-money-graph',
  templateUrl: './money-graph.component.html',
  styleUrls: ['./money-graph.component.scss'],
  /*template: `
    <ngx-charts-bar-vertical
      [view]="view"
      [scheme]="colorScheme"
      [results]="single"
      [gradient]="gradient"
      [xAxis]="showXAxis"
      [yAxis]="showYAxis"
      [legend]="showLegend"
      [showXAxisLabel]="showXAxisLabel"
      [showYAxisLabel]="showYAxisLabel"
      [xAxisLabel]="xAxisLabel"
      [yAxisLabel]="yAxisLabel"
      [barPadding]="barPadding"
      [roundEdges]="roundEdges"
      [animations]="animations"
    ></ngx-charts-bar-vertical>
  `*/
})
export class MoneyGraphComponent implements OnInit {
   
  
  single: { name: string, value: number }[] = [];
  view: [number,number] = [700, 400];

  // opciones del gráfico
  showLegend: boolean = true;
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Fecha';
  showYAxisLabel: boolean = true;
  yAxisLabel: string = 'Dinero';
  barPadding: number = 50;
  roundEdges: boolean = true;
  animations: boolean = true;

  // configuración de colores
  colorScheme: any = { domain: ['green', 'red'] };
  

  // gradiente de colores
  gradient: boolean = false;

  userId: any = 0;

  constructor(private store: Store<AppState>, private transactionsService: TransactionsService) {}

  ngOnInit() {   
    this.transactionsService.getTransactions().subscribe((transactions:any[]) => {
            
            const incomes = transactions.filter(t => t.type === 'topup').map(t => ({ name: t.date, value: t.amount }));
            const expenses = transactions.filter(t => t.type === 'payment').map(t => ({ name: t.date, value: -t.amount }));
            this.single = [...incomes, ...expenses].sort((a, b) => a.name.localeCompare(b.name));
          });
  }
}
