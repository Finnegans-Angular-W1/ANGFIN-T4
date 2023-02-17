import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import {MatListModule} from '@angular/material/list';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './components/home/home.component';
import { E404Component } from './e404/e404.component';

import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//Components

import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';


//Material
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './core/state/app.state';
import { AuthEffects } from './core/state/effects/auth.effects';
import { EnviodedineroComponent } from './components/enviodedinero/enviodedinero.component';
import { FooterComponent } from './components/footer/footer.component';
import { DivisasComponent } from './components/divisas/divisas.component';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { TipoDeCambioComponent } from './shared/tipoDeCambio/tipoDeCambio.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { PasswordResetComponent } from './Componentes/password-reset/password-reset.component';

import { Error404Component } from './components/error404/error404.component';
import { ShellComponent } from './components/shell/shell.component';
import { TwWidgetComponent } from './components/tw-widget/tw-widget.component';




@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DivisasComponent,
    EnviodedineroComponent,
    FooterComponent,
    TipoDeCambioComponent,
    ProfileComponent,
    PasswordResetComponent,
    TransactionsListComponent,
    ShellComponent,
    TwWidgetComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSliderModule,
    SharedModule,
    MatSlideToggleModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule, 
    MatListModule,
    MatIconModule,
    MatFormFieldModule,
    FormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
