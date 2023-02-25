import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TransactionsFormComponent } from './transactions-form.component';

describe('TransactionsFormComponent', () => {
  let component: TransactionsFormComponent;
  let fixture: ComponentFixture<TransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionsFormComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if fields are required', () => {
    const amount = component.form.controls['amount'];
    const concept = component.form.controls['concept'];
    const date = component.form.controls['date'];

    amount.setValue('');
    concept.setValue('');
    date.setValue('');

    expect(amount.valid).toBeFalsy();
    expect(concept.valid).toBeFalsy();
    expect(date.valid).toBeFalsy();
  })

  it('should check if form is valid', () => {
    const amount = component.form.controls['amount'];
    const concept = component.form.controls['concept'];
    const date = component.form.controls['date'];

    amount.setValue(1);
    concept.setValue('test');
    date.setValue(new Date());

    expect(component.form.valid).toBeTruthy();
  })

  it('should check if amount is invalid because amount is below 1', () => {
    const amount = component.form.controls['amount'];

    amount.setValue(0);

    expect(amount.valid).toBeFalsy();
  })

  it('should check if form is invalid because amount', () => {
    const amount = component.form.controls['amount'];
    const concept = component.form.controls['concept'];
    const date = component.form.controls['date'];

    amount.setValue(0);
    concept.setValue('test');
    date.setValue(new Date());

    expect(component.form.valid).toBeFalsy();
  })

  it('should check if form is invalid because concept', () => {
    const amount = component.form.controls['amount'];
    const concept = component.form.controls['concept'];
    const date = component.form.controls['date'];

    amount.setValue(1);
    concept.setValue('');
    date.setValue(new Date());

    expect(component.form.valid).toBeFalsy();
  })

  it('should check if form is invalid because date', () => {
    const amount = component.form.controls['amount'];
    const concept = component.form.controls['concept'];
    const date = component.form.controls['date'];

    amount.setValue(1);
    concept.setValue('');
    date.setValue('');

    expect(component.form.valid).toBeFalsy();
  })
});
