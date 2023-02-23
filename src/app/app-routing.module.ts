import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as path from 'path';
import { E404Component } from './e404/e404.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CurrencyConverterComponent } from './shared/currency-converter/currency-converter.component';
import { TransactionsFormComponent } from './shared/transactions-form/transactions-form.component';
import { HomeComponent } from './components/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { ShellComponent } from './components/shell/shell.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { OperationsComponent } from './components/operations/operations.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';
import { AlertComponent } from './shared/alerts/alert.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { MoneyTransferComponent } from './components/money-transfer/money-transfer.component';
import { DepositMoneyComponent } from './components/deposit-money/deposit-money.component';


const routes: Routes = [
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  {
    path: '',
    component: ShellComponent,
    children: [
      { path: 'sidebar', component: SidebarComponent },
      { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
      { path: 'ingresos', component: TransactionsListComponent, canActivate: [AuthGuard] },
      { path: 'perfil', component: ProfileComponent, canActivate: [AuthGuard] },
      { path: 'enviar-dinero', component: MoneyTransferComponent, canActivate: [AuthGuard] },
      { path: 'depositar-dinero', component: DepositMoneyComponent, canActivate: [AuthGuard] },
      { path: 'transactions-form', component: TransactionsFormComponent },
      { path: 'currency-converter', component: CurrencyConverterComponent },
      //{ path: 'operations', component: OperationsComponent },
    ]
  },
  { path: 'landing', component: LandingPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  {path:'**', component: E404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
