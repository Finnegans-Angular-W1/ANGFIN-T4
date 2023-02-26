import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AlertComponent } from '../../shared/alerts/alert.component';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { selectUser } from '../../core/state/selectors/auth.selectors';
import { Observable } from 'rxjs';
import { User } from 'src/app/core/interfaces/user';
import { AccountsService } from 'src/app/core/services/accounts.service';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-plazo-fijo',
  templateUrl: './plazo-fijo.component.html',
  styleUrls: ['./plazo-fijo.component.scss']
})

export class PlazoFijoComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any> | undefined;
  form: FormGroup;
  user: Observable<User>;
  usuario!: User;
  accountMoney!: number;
  plazosfijoshechos: Array<any> = [{ concepto: "Herencia", endDate: 'Sun Mar 26 2023 00:00:00 GMT-0300', importe: 156000, startDate: 'Sun Feb 26 2023 00:00:00 GMT-0300' }, { concepto: "Honorarios", endDate: 'Sun Mar 29 2023 00:00:00 GMT-0300', importe: 6500, startDate: 'Sun Jan 16 2023 00:00:00 GMT-0300' }];
  saldoConInteres!: number;
  displayedColumns: string[] = ['concepto', 'Liquidación', 'Saldo', 'Suscripción'];
  dataSource = this.plazosfijoshechos;

  constructor(private fb: FormBuilder, private router: Router, private dialog: MatDialog, private http: HttpClient, private accountsService: AccountsService, private store: Store<AppState>) {
    this.user = this.store.select(selectUser);
    this.user.subscribe(user => this.usuario = user);
    this.accountsService.getAccounts().subscribe((accounts) => this.accountMoney = accounts[0].money);

    this.form = this.fb.group({
      importe: new FormControl('', [Validators.required, Validators.pattern(/^([0-9])*$/)]),
      concepto: new FormControl('', [Validators.required, Validators.pattern('^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$')]),
      startDate: new FormControl<Date | null>(null, [Validators.required]),
      endDate: new FormControl<Date | null>(null, [Validators.required]),
    })


  };

  get startDate() {
    return this.form.controls['startDate'];
  }

  get endDate() {
    return this.form.controls['endDate'];
  }


  ngOnInit() {
    this.form.get("importe")?.valueChanges.subscribe(selectedValue => {
      this.saldoConInteres = selectedValue * 1.60;
      if (selectedValue > this.accountMoney) {
        this.form.controls['importe'].setValue(0);
        this.dialog.open(
          AlertComponent, {
          data: {
            title: 'El importe del plazo fijo no puede superar su saldo',
          }
        }
        )
      }
    })
  };

  plazoFijo() {
    if (this.form.invalid) {
      return;
    }
    this.plazosfijoshechos.push(this.form.value)
    this.accountMoney = this.accountMoney - this.form.get("importe")?.value;
    console.log(this.plazosfijoshechos);
    this.table?.renderRows();
    this.dialog.open(
      AlertComponent, {
      data: {
        title: 'Confirme los datos para el procesamiento',
      }
    }
    )
  }
}
