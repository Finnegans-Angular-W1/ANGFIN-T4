import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentCalcComponent } from './investment-calc.component';

describe('InvestmentCalcComponent', () => {
  let component: InvestmentCalcComponent;
  let fixture: ComponentFixture<InvestmentCalcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestmentCalcComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvestmentCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
