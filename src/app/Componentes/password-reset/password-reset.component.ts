import { Component } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./form-field-reset.css'],
})
export class PasswordResetComponent {
  hide = true;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  resetPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: MustMatch('password', 'confirmPassword')
  });

  get f() { return this.resetPasswordForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }
    // TODO: Use EventEmitter with form value
    console.log(this.resetPasswordForm.value);
  }
}