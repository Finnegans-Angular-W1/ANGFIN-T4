import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';

import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { provideMockStore } from '@ngrx/store/testing';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        FormsModule,
        MatDialogModule,
      ],
      declarations: [ RegisterComponent ],
      providers: [provideMockStore({})],
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have null in let error`, () => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.debugElement.componentInstance;
    expect(component.error).toEqual(null);
  });

  it('Check the initial form values', () => {
    const loginFormGroup = component.form;
    const loginFormValues = {
      first_name: '',
      last_name: '',
      email: '',
      password: '',
    }
    expect(loginFormGroup.value).toEqual(loginFormValues);
  })

  it('Test the number of elements in form', () => {
    const formElement = fixture.debugElement.nativeElement.querySelector('#registerForm');
    const inputElements = formElement.querySelectorAll('input');
    expect(inputElements.length).toEqual(4);
  })

  it('email field validity', () => {
    let email = component.form.controls['email']; 
    expect(email.valid).toBeFalsy();
  });

});
