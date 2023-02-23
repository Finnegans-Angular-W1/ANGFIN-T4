import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-contact-dialog',
  templateUrl: './add-contact-dialog.component.html',
  styleUrls: ['./add-contact-dialog.component.scss']
})



export class AddContactDialogComponent implements OnInit {

  nuevoContacto = {
    nombre: '',
    entidadBancaria: ''
  };

  constructor(public dialogRef: MatDialogRef<AddContactDialogComponent>) { 
      
    }
    
  ngOnInit(): void {
  }

}
 
