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
    })
  };

  range = new FormGroup({
    start: new FormControl<Date | null>(null, [Validators.required]),
    end: new FormControl<Date | null>(null, [Validators.required]),
  });

  startDatePlazoFijo: any
  endDatePlazoFijo: any
  daysBetween: any

  userId: any = 0;
  ngOnInit() {
    this.store.select(selectUser)
      .subscribe(user => {
        this.userId = user.id;
      });
  };

  plazofijohecho: any = []

  plazoFijo() {
    if (this.form.invalid) {
      return;
    }
    const startDatePlazoFijo1 = new Date(this.startDatePlazoFijo);
    const endDatePlazoFijo1 = new Date(this.endDatePlazoFijo);
    const Time = endDatePlazoFijo1.getTime() - startDatePlazoFijo1.getTime();
    this.daysBetween = Time / (1000 * 3600 * 24);
    const montoTotal = this.form.value.importe * 1.6 * this.daysBetween;

    this.dialog.open(
      AlertComponent, {
      data: {
        title: 'Confirme los datos para el procesamiento',
        message: 'El importe a destinar: ' + this.form.value.importe + ' '
          + 'La cantidad de día del depósito: ' + this.daysBetween + ' '
          + 'El monto del plazo fijo con intereses es $' + montoTotal
      }
    }
    )
  }
}
