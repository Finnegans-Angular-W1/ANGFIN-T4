import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

interface Banco{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss']
})

export class AddContactDialogComponent implements OnInit {

  nombre: string = '';
  entidadBancaria: string = '';

  Bancos: Banco[] = [
    { value: 'AlkyBank', viewValue: 'AlkyBank' },
    { value: 'Banco Macro', viewValue: 'Banco Macro' },
    { value: 'Banco Santander', viewValue: 'Banco Santander' },
    { value: 'BBVA', viewValue: 'BBVA' },
    { value: 'Banco Nación', viewValue: 'Banco Nación' },
    { value: 'HSBC', viewValue: 'HSBC' }
  ];

  constructor(public dialogRef: MatDialogRef<AddContactDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { 
      
  }
    
  agregarContacto(): void {
    const nuevoContacto = {
      nombre: this.nombre,
      entidadBancaria: this.entidadBancaria
    };
    this.dialogRef.close(nuevoContacto);
  }
  ngOnInit(): void {
  }

}
 
