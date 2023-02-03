import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './Componentes/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { ROOT_REDUCERS } from './core/state/app.state';
import { AuthEffects } from './core/state/effects/auth.effects';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    RouterModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' }),
    EffectsModule.forRoot([AuthEffects]),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
