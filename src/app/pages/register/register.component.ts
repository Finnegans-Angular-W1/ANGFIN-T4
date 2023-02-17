import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectAuthError, selectAuthLoading } from '../../core/state/selectors/auth.selectors';
import { sendRegisterForm } from '../../core/state/actions/auth.actions';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;
  error$ = this.store.select(selectAuthError);
  error: any = null
  loading$ = this.store.select(selectAuthLoading);

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private dialog: MatDialog) {
    this.form = this.fb.group({
      first_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],),
      last_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit(): void {
    this.error$.subscribe(error => this.error = error);
  }

  register() {
    if (this.form.invalid) {
      return;
    }
    this.store.dispatch(sendRegisterForm({user: this.form.value}));
    setTimeout(() => {
      if (this.error) {
        this.dialog.open(
          DialogComponent, {
            data: {
              title: 'Error al registrarse',
              message: this.error.error.error,
              confirmText: 'Aceptar',
              cancelText: 'Cerrar'
            }
          }
        )
        return;
      }
      this.router.navigateByUrl('/login');
    }, 1000);

  }

}


