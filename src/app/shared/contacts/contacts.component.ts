import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DeleteContactDialogComponent } from '../delete-contact-dialog/delete-contact-dialog.component';
import { AddContactDialogComponent } from '../add-contact-dialog/add-contact-dialog.component';
@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss']
})
export class ContactsComponent implements OnInit {

  contactos: Array<any> = [  { nombre: 'Juan Perez', entidadBancaria: 'AlkyBank' },  { nombre: 'Maria Rodriguez', entidadBancaria: 'Banco Santander' },  { nombre: 'Pedro Gonzalez', entidadBancaria: 'BBVA' },  { nombre: 'Laura Fernandez', entidadBancaria: 'Alky Bank' },  { nombre: 'Diego Martinez', entidadBancaria: 'HSBC' },  { nombre: 'Ana Gomez', entidadBancaria: 'Banco Macro' },  { nombre: 'Carlos Aguilar', entidadBancaria: 'Banco Santander' },  { nombre: 'Mariano Torres', entidadBancaria: 'BBVA' },  { nombre: 'Lucia Sosa', entidadBancaria: 'AlkyBank' },  { nombre: 'Luisa Martinez', entidadBancaria: 'Banco Nación' },  { nombre: 'Jorge Fernandez', entidadBancaria: 'HSBC' },  { nombre: 'Gabriela Ramos', entidadBancaria: 'Banco Macro' },  { nombre: 'Hernan Gonzalez', entidadBancaria: 'Banco Santander' },  { nombre: 'Florencia Rodriguez', entidadBancaria: 'AlkyBank' },  { nombre: 'Julian Ortiz', entidadBancaria: 'Banco Nación' },  { nombre: 'Maria Jose Sanchez', entidadBancaria: 'HSBC' },  { nombre: 'Ezequiel Fernandez', entidadBancaria: 'Banco Macro' },  { nombre: 'Laura Martinez', entidadBancaria: 'AlkyBank' },  { nombre: 'Miguel Torres', entidadBancaria: 'Banco Santander' },  { nombre: 'Valeria Aguilar', entidadBancaria: 'AlkyBank' }];

  constructor(public dialog: MatDialog) { 
  
  }

  borrarContacto(index: number): void {
    const dialogRef = this.dialog.open(DeleteContactDialogComponent, {
      width: '400px',
      data: { contacto: this.contactos[index] }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactos.splice(index, 1);
      }
    });
  }

  agregarContactoModal() {
    const dialogRef: MatDialogRef<any> = this.dialog.open(AddContactDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.contactos.unshift({nombre: result.nombre, entidadBancaria: result.entidadBancaria});
        this.ngOnInit();
      }
    });
  }

 

  agregarImagenes() {
    this.contactos.forEach(contacto => {
      switch (contacto.entidadBancaria) {
        case 'Banco Macro':
          contacto.img = 'http://www.rh1hernando.com.ar/img/noticias/banco-macro-logo.jpg';
          break;
        case 'Banco Santander':
          contacto.img = 'https://i.pinimg.com/564x/af/8b/d2/af8bd28019570ed1ae32571dc930d43a.jpg';
          break;
        case 'BBVA':
          contacto.img = 'https://brandemia.org/sites/default/files/inline/images/bbva_logo_antes.jpg';
          break;
        case 'AlkyBank':
          contacto.img = 'assets/logo-footer-nobackground.png';
          break;
        case 'Banco Nación':
          contacto.img = 'https://www.logotypes101.com/logos/394/3C1B38ED60AB01B95FA02846869074CD/banconacion2015.png';
          break;
        case 'HSBC':
          contacto.img = 'https://w7.pngwing.com/pngs/141/1015/png-transparent-the-hongkong-and-shanghai-banking-corporation-hsbc-bank-usa-bank-angle-company-text.png';
          break;
        default:
          contacto.img = 'assets/logo-footer-nobackground.png';
          break;
      }
    });
  }




  ngOnInit(): void {
    this.agregarImagenes();
  }

}
