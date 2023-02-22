import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/core/state/app.state';

@Component({
  selector: 'app-profile-edit',
  templateUrl: './profile-edit.component.html',
  styleUrls: ['./profile-edit.component.scss']
})
export class ProfileEditComponent implements OnInit {

  form!: FormGroup;

  constructor(private fb:FormBuilder, private store: Store<AppState>, private router: Router) {
    
    this.form = this.fb.group({
      first_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')],),
      last_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-Z ]*$')]),
    })


  }

  ngOnInit(): void {

  }

  submit(){

  }

}
