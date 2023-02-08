import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../core/interfaces/transaction';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.scss']
})
export class TransactionsFormComponent implements OnInit {

  @Input() transaction!: Transaction; 

  form!: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void {
    if (this.transaction) {
      this.editForm();
    } else {
      this.createForm();
    }
  }

  createForm() {
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      concept: ['', [Validators.required]],
      date: [new Date()]
    })
  }

  editForm() {
    this.form = this.fb.group({
      amount: [{value: this.transaction.amount, disabled:true}, [Validators.required, Validators.min(1)]],
      concept: [this.transaction.concept, [Validators.required]],
      date: [{value: this.transaction.date, disabled:true}]
    })
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    console.log(this.form.getRawValue());
  }

}
