import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { By } from '@angular/platform-browser';


describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule
      ],
      declarations: [ LoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //Primera prueba, espera que el componente exista
    it('should create', () => {
      expect(component).toBeTruthy();
    });

  //Segunda prueba, verifica que los campos requeridos esten correctos
    it('should validate required fields', () => {
      component.form.controls['username'].setValue('');
      component.form.controls['password'].setValue('');
      fixture.detectChanges();

      const username = component.form.get('username');
      const password = component.form.get('password');
      expect(username).toBeTruthy();
      expect(password).toBeTruthy();
    });

  
  // it('should display error messages if fields are invalid', () => {
  //   component.form.controls['username'].setValue('');
  //   component.form.controls['password'].setValue('');
  //   fixture.detectChanges();

  //   const username = fixture.debugElement.query(By.css('#username')).nativeElement;
  //   const password = fixture.debugElement.query(By.css('#password')).nativeElement;
  //   expect(username.getAttribute);
  // });

});
