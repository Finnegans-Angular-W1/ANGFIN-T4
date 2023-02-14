import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { sendLoginForm } from '../../core/state/actions/auth.actions';
import { Router } from '@angular/router';
import { selectAuthError, selectLoading } from '../../core/state/selectors/auth.selectors';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../shared/dialog/dialog.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;
  error$ = this.store.select(selectAuthError);
  error: any = null;
  loading$ = this.store.select(selectLoading);

  constructor(private fb:FormBuilder, private store: Store<AppState>, private router: Router, private dialog: MatDialog){
    this.form = this.fb.group({
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl ('',[Validators.required,Validators.minLength(6)]),
    })
  }

  ngOnInit(): void {
    this.error$.subscribe(error => this.error = error);
    this.loading$.subscribe(loading => console.log(loading));
  }

  Login(){
    if ( this.form.invalid ) {
      return;
    }
    this.store.dispatch(sendLoginForm({user: this.form.value}));
    setTimeout(() => {
      if (this.error) {
        this.dialog.open(
          DialogComponent, {
            data: {
              title: 'Error al iniciar sesión',
              message: 'Email y/o contraseña incorrecto',
              confirmText: 'Aceptar',
              cancelText: 'Cerrar'
            }
          }
        )
        return;
      }
      this.router.navigateByUrl('/home');
    }, 1000);
  }


}
