import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CurrencyService } from '../../core/services/currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss']
})
export class CurrencyConverterComponent implements OnInit {

  currencies = [
    {value: 'ARS,USD', viewValue: 'Pesos a Dólares'},
    {value: 'USD,ARS', viewValue: 'Dólares a Pesos'},
  ]

  form!: FormGroup;
  amountConverted!: number;

  constructor( private currencyService: CurrencyService, private fb: FormBuilder  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  
  createForm() {
    this.form = this.fb.group({
      amount: ['', [Validators.required, Validators.min(1)]],
      method: ['', Validators.required]
    })
  }
  
  submit() {    
    if (this.form.invalid) {
      return;
    }
    
    const { amount, method } = this.form.value;
    const splitedString = method.split(',');

    this.currencyService.convert(splitedString[0], splitedString[1]).subscribe((resp: any) => {
      this.amountConverted = amount * resp.conversion_rate;
    }
    )
    
  }

}
