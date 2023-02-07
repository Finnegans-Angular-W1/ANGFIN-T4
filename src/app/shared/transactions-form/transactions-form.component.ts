import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.scss']
})
export class TransactionsFormComponent implements OnInit {

  // @Input() 

  form!: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      concept: ['', [Validators.required]],
      date: [new Date()]
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);
  }

}
