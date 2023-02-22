import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {  MatSidenavModule } from '@angular/material/sidenav';
import {  MatToolbarModule } from '@angular/material/toolbar';
import {  MatListModule } from '@angular/material/list';
import {  MatIconModule } from '@angular/material/icon';
import {  MatButtonModule } from '@angular/material/button';
import { SpinnerComponent } from './spinner/spinner.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { InvestmentCalcComponent } from './investment-calc/investment-calc.component';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { TransactionsFormComponent } from './transactions-form/transactions-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';
import { AppRoutingModule } from '../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { AlertComponent } from './alerts/alert.component';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { AlertComponent } from './alerts/alert.component';
import { TwWidgetComponent } from '../components/tw-widget/tw-widget.component';
import { CreditCardComponent } from './credit-card/credit-card.component';
import { MatCard, MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    SidebarComponent,
    SpinnerComponent,
    TitulosComponent,
    DialogComponent,
    TransactionsFormComponent,
    CurrencyConverterComponent,
    InvestmentCalcComponent,
    AlertComponent,
    FooterComponent,
    TwWidgetComponent,
    CreditCardComponent,
    TwWidgetComponent,
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent,
    TitulosComponent,
    AlertComponent,
    TransactionsFormComponent,
    FooterComponent,
    CreditCardComponent,
    TwWidgetComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatFormFieldModule,
    FormsModule,
    MatDatepickerModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatDatepickerModule,
    MatTableModule,
    MatSortModule,
    MatCardModule,
  ]
})
export class SharedModule { }
