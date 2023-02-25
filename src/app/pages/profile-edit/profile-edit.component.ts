import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { User } from 'src/app/core/interfaces/user';
import { UsersService } from 'src/app/core/services/users.service';
import { AppState } from 'src/app/core/state/app.state';
import { selectUser } from 'src/app/core/state/selectors/auth.selectors';
import { updateUser } from '../../core/state/actions/auth.actions';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  form!: FormGroup;
  user!: User;

  constructor(private fb: FormBuilder, private store: Store<AppState>, private router: Router, private usersService: UsersService) {

    this.form = this.fb.group({
      first_name: new FormControl('', [Validators.required, Validators.pattern("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")],),
      last_name: new FormControl('', [Validators.required, Validators.pattern("^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$")]),
    })


  }

  ngOnInit(): void {

    this.store.select(selectUser).subscribe(user => this.user=user)

  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    const {first_name, last_name} = this.form.value;

    let editUser = {
      first_name : first_name,
      last_name : last_name,
    }

    if (this.user.id) {
      this.usersService.editUser(this.user.id, editUser).subscribe(res => {
        this.store.dispatch(updateUser({first_name, last_name}))
        this.router.navigateByUrl("/home")
      });
    }


   
  }


}
