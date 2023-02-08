import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon'

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./form-field-reset.css'],
})
export class PasswordResetComponent {
  hide = true;

  resetPasswordForm = this.fb.group({
    email: ['', Validators.required],
    PasswordValidation: this.fb.group({
      password: [''],
      confirmPassword: ['']
    }),
  });

  constructor(private fb: FormBuilder) { }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.resetPasswordForm.value);
  }
}