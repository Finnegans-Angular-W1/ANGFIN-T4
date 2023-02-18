import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./form-field-reset.css'],
})
export class PasswordResetComponent {
  hide = true;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService) { }

  resetPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmPassword: ['', [Validators.required]],
  }, {
    validators: MustMatch('password', 'confirmPassword')
  });

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetPasswordForm.invalid) {
      return;
    }
    this.auth.resetPassword(this.resetPasswordForm.value.password).subscribe(resp => 
      console.log(resp)
      // Debería redireccionar
      )
  }
}