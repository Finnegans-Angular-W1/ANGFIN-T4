import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private fb:FormBuilder){
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
    
  }

  Login(){
    if (this.getEmail?.errors?.['pattern']){
      var temp= document.getElementById("emailError")
    }
    else if(this.getPass?.errors?.['minLength']){
      var temp= document.getElementById("passError")
    }
    else{
      const email=this.form.value.email;
      const password =this.form.value.password;
    }

    //Aca quedaria validar si ya esta registrado el email
  }


}
