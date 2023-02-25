import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from '../../core/services/auth.service';
import { PasswordResetComponent } from './password-reset.component';
import { FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('PasswordResetComponent', () => {
    let component: PasswordResetComponent;
    let fixture: ComponentFixture<PasswordResetComponent>;
    let authService: AuthService;
    let spy: jasmine.Spy;
    let email: FormControl;
    let password: FormControl;
    let confirmPassword: FormControl;

    beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [ReactiveFormsModule, MatFormFieldModule, MatIconModule, HttpClientModule, StoreModule.forRoot({}),
        MatInputModule, BrowserAnimationsModule],
    declarations: [PasswordResetComponent],
    providers: [AuthService],
    }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PasswordResetComponent);
        component = fixture.componentInstance;
        authService = TestBed.inject(AuthService);
        spy = spyOn(authService, 'resetPassword');
        password = component.resetPasswordForm.controls.password as FormControl;
        confirmPassword = component.resetPasswordForm.controls.confirmPassword as FormControl;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should set submitted to true when onSubmit is called', () => {
        component.onSubmit();
        expect(component.submitted).toBeTrue();
    });

    describe('password field', () => {
        it('should be invalid when empty', () => {
        password.setValue('');
        expect(password.valid).toBeFalse();
        });

        it('should be invalid when less than 6 characters', () => {
            password.setValue('12345');
            expect(password.valid).toBeFalse();
        });
        
        it('should be valid when 6 or more characters', () => {
            password.setValue('123456');
            expect(password.valid).toBeTrue();
        });

    });

    describe('confirmPassword field', () => {
        it('should be invalid when empty', () => {
        confirmPassword.setValue('');
        expect(confirmPassword.valid).toBeFalse();
        });

        it('should be invalid when does not match password', () => {
            const pass1 =  password.setValue('password');
            const pass2 = confirmPassword.setValue('password1');
            expect(confirmPassword.valid).toBeFalse();
            expect(pass1).toEqual(pass2);
        });
        
        it('should be valid when matches password', () => {
            password.setValue('password');
            confirmPassword.setValue('password');
            expect(confirmPassword.valid).toBeTrue();
        });
    });
});