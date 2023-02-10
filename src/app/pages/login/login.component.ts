import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { sendLoginForm } from '../../core/state/actions/auth.actions';
import { Router } from '@angular/router';
import { selectToken } from '../../core/state/selectors/auth.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder, private store: Store<AppState>, private router: Router){
    this.form = this.fb.group({
      email:new FormControl('',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password:new FormControl ('',[Validators.required,Validators.minLength(6)]),
    })
  }

  get getEmail(){
    return this.form.get('email')
  }

  get getPass(){
    return this.form.get('password')
  }


  ngOnInit(): void {
    this.store.select(selectToken).subscribe(res => console.log(res));
  }

  Login(){
    if (this.getEmail?.errors?.['pattern']){
      var temp= document.getElementById("emailError")
    }
    else if(this.getPass?.errors?.['minLength']){
      var temp= document.getElementById("passError")
    }
    else{
      this.store.dispatch(sendLoginForm({user: this.form.value}));
      setTimeout(() => {
        this.router.navigateByUrl('/home');
      }, 1000);
    }

    //Aca quedaria validar si ya esta registrado el email
  }


}
