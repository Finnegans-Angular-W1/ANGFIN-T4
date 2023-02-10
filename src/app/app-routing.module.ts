import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { E404Component } from './e404/e404.component';
import { CurrencyConverterComponent } from './shared/currency-converter/currency-converter.component';
import { TransactionsFormComponent } from './shared/transactions-form/transactions-form.component';

const routes: Routes = [
  { path: 'transactions-form', component: TransactionsFormComponent },
  { path: 'currency-converter', component: CurrencyConverterComponent },
  {path:'**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
