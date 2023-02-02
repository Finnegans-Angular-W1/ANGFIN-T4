import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule, Routes } from '@angular/router';

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
  ],
  exports: [
    SidebarComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class SharedModule { }
