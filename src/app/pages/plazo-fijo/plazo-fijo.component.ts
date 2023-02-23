import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';
import { plazoFijoService } from 'src/app/core/services/plazofijo.service';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectToken, selectUser } from '../../core/state/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';



@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})
export class PlazoFijoComponent implements OnInit {
  form: FormGroup;
  user: Observable<User>;
  usuario!: User;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private http: HttpClient, private store: Store<AppState>, private plazoFijoService: plazoFijoService) {
    this.user = this.store.select(selectUser);
    this.user.subscribe(user => this.usuario = user);

    this.form = this.fb.group({
      importe: new FormControl('', [Validators.required, Validators.pattern(/^([0-9])*$/)]),
      concepto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),

      last_name: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      email: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    })
  };

  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  startDatePlazoFijo: any
  endDatePlazoFijo: any
  daysBetween: any

  calcularDias(){
    const startDatePlazoFijo1 = new Date(this.startDatePlazoFijo);
    const endDatePlazoFijo1 = new Date(this.endDatePlazoFijo);
    const Time = startDatePlazoFijo1.getTime() - endDatePlazoFijo1.getTime();
    this.daysBetween = Time / (1000 * 3600 * 24);
  }




  userId: any = 0;

  ngOnInit() {

    this.store.select(selectToken).subscribe(token => console.log(token));

    this.store.select(selectUser)
      .subscribe(user => {
        this.userId = user.id;
      });
  };


  plazoFijo() {
    if (this.form.invalid) {
      return;
    }
  }
}
