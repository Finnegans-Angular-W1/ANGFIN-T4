import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-contact-dialog',
  templateUrl: './delete-contact-dialog.component.html',
  styleUrls: ['./delete-contact-dialog.component.scss']
})
export class DeleteContactDialogComponent implements OnInit {

  contacto: any;

  constructor(public dialogRef: MatDialogRef<DeleteContactDialogComponent>) { }


  ngOnInit(): void {
  }

}
