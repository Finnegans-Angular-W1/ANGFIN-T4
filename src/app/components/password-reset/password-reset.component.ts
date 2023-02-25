import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


// import custom validator to validate that password and confirm password fields match
import { MustMatch } from './_helpers';
import { AuthService } from '../../core/services/auth.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';
import { logout } from 'src/app/core/state/actions/auth.actions';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./form-field-reset.css'],
})
export class PasswordResetComponent {
  hide = true;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private auth: AuthService, private router: Router, private store: Store<AppState>) {

  }

  resetPasswordForm = this.formBuilder.group({
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
    this.auth.resetPassword(this.resetPasswordForm.value.password).subscribe(resp => {
      this.store.dispatch(logout());
      window.location.href = '/login';
    }
    )
  }
}