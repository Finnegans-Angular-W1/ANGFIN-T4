import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { TransactionsFormComponent } from './transactions-form.component';

describe('TransactionsFormComponent', () => {
  let component: TransactionsFormComponent;
  let fixture: ComponentFixture<TransactionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
      ],
      declarations: [ TransactionsFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
