import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { SpinnerComponent } from './spinner/spinner.component';
import { TitulosComponent } from './titulos/titulos.component';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { TransactionsFormComponent } from './transactions-form/transactions-form.component';


const routes: Routes = [
  // { path: 'home', component: Home },
  // { path: 'ingresos', component: Ingresos },
  // { path: 'egresos', component: Egresos },
  // { path: 'enviarDinero', component: EnviarDinero },
  // { path: 'plazosFijos', component: PlazosFijos },
  // { path: 'contactos', component: Contactos },
  // { path: 'perfil', component: Perfil },
  // { path: 'billeteras', component:  Billeteras},
];

@NgModule({
  declarations: [
    SidebarComponent,
    SpinnerComponent,
    TitulosComponent,
    DialogComponent,
    TransactionsFormComponent,
  ],
  exports: [
    SidebarComponent,
    SpinnerComponent,
    TitulosComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    MatSlideToggleModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
  ]
})
export class SharedModule { }
