import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyGraphComponent } from './money-graph.component';

describe('MoneyGraphComponent', () => {
  let component: MoneyGraphComponent;
  let fixture: ComponentFixture<MoneyGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoneyGraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoneyGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
