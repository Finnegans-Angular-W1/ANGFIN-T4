import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  constructor(
    public dialog: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: {
      title: string,
      message: string,
      confirmText: string,
      cancelText: string
    }
  ) { }

  ngOnInit(): void {}

  closeDialog() {
    this.dialog.close(false);
  }

  confirm() {
    this.dialog.close(true);
  }

}
