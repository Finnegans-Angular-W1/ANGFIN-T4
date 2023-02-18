import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
    
@Component({
    selector: 'alert',
    templateUrl: 'alert.component.html',
    styleUrls: ['alert.component.scss']
})

export class AlertComponent implements OnInit {

    constructor(
        public dialog: MatDialogRef<AlertComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: {
            title: string,
            message: string,
        }
    ) { }

    ngOnInit() {}
    
    confirm() {
    this.dialog.close(true);
    }

}