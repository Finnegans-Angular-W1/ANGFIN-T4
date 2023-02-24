import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Transaction } from '../../core/interfaces/transaction';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transactions-form',
  templateUrl: './transactions-form.component.html',
  styleUrls: ['./transactions-form.component.scss']
})
export class TransactionsFormComponent implements OnInit {

  @Input() transaction!: Transaction; 
  @Output() newItemEvent = new EventEmitter<string>();

  form!: FormGroup;
  

  constructor( private fb: FormBuilder, private router: Router ) { }

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
      date: [new Date(), [Validators.required]]
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
    this.addNewItem(this.form.getRawValue())
  }

  addNewItem(transaction: any){
    this.newItemEvent.emit(transaction)
  }

  redirectToHome(){
    this.router.navigateByUrl('/home')

  }

}

