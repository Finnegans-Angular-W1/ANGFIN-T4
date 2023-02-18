import { LoginComponent } from './login.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { MatDialogModule } from '@angular/material/dialog';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}),
        MatDialogModule
      ],
      declarations: [ 
        LoginComponent 
      ],
      providers:[
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  //Primera prueba, espera que el componente exista
    it('Should create', () => {
      expect(component).toBeTruthy();
    });

  //Segunda prueba, verifica que los campos requeridos
    it('Should check if fields are required', () => {
      const username = component.form.controls['email'];
      const password = component.form.controls['password'];
      username.setValue('');
      password.setValue('');
      expect(username.valid).toBeFalsy();
      expect(password.valid).toBeFalsy();
    });

  //Tercera prueba, verifica un caso correcto
    it('Should check if form is valid', () => {
      const username = component.form.controls['email'];
      const password = component.form.controls['password'];
      username.setValue('juanperez9999@example.com');
      password.setValue('abc123');
      expect(component.form.valid).toBeTruthy();
    });
  
  //Cuarta prueba, verifica un caso donde falta el campo de contraseña
  it('Should check if form is invalid because password', () => {
    const username = component.form.controls['email'];
    const password = component.form.controls['password'];
    username.setValue('juanperez9999@example.com');
    password.setValue('');
    expect(component.form.valid).toBeFalsy();
  });

  //Quinta prueba, verifica un caso donde falta el campo de usuario
  it('Should check if form is invalid because email', () => {
    const username = component.form.controls['email'];
    const password = component.form.controls['password'];
    username.setValue('');
    password.setValue('abc1234');
    expect(component.form.valid).toBeFalsy();
  });

});

function provideMockStore(arg0: {}): any {
  throw new Error('Function not implemented.');
}

