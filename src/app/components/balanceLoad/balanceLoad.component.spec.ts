/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BalanceLoadComponent } from './balanceLoad.component';
import { ExpensesService } from 'src/app/core/services/expenses.service';
import { HttpClientModule } from '@angular/common/http';

describe('BalanceLoadComponent', () => {
  let component: BalanceLoadComponent;
  let fixture: ComponentFixture<BalanceLoadComponent>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [ BalanceLoadComponent ],
      imports: [HttpClientModule],
      providers: [ExpensesService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BalanceLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();

  });

  it('should render the title', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-titulos'));
    expect(counter).toBeTruthy();
  })

  it('should render the form', () => {
    const { debugElement } = fixture;
    const counter = debugElement.query(By.css('app-transactions-form'));
    expect(counter).toBeTruthy();
  })
});
