import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      first_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],),
      last_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  }

  ngOnInit(): void {
  }

  get getEmail() {
    return this.form.get('email')
  }

  get getPass() {
    return this.form.get('password')
  }

  get getFname() {
    return this.form.get('first_name')
  }

  get getLname() {
    return this.form.get('last_name')
  }

  register() {
    if (this.getEmail?.errors?.['pattern']) {
      var temp = document.getElementById("emailError")
    }
    else if (this.getPass?.errors?.['minlength']) {
      var temp = document.getElementById("passError")
    }
    else {
      const email = this.form.value.email;
      const password = this.form.value.password;
    }

  }

}
