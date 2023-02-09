import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { LoadingInterceptor } from './core/services/interceptors/loading.interceptor'
import {MatListModule} from '@angular/material/list';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './Componentes/home/home.component';
import { E404Component } from './e404/e404.component';

import { RouterModule, Routes } from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';

//Components
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TransactionsListComponent } from './pages/transactions-list/transactions-list.component';

//Material
import {MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';


const appRoutes:Routes=[
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent}
];

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './core/state/app.state';
import { AuthEffects } from './core/state/effects/auth.effects';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    E404Component,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    TransactionsListComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
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
    MatFormFieldModule,
    FormsModule
    
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
