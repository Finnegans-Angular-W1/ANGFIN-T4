import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { HttpService } from 'src/app/core/services/http.service';
import { UsersService } from 'src/app/core/services/users.service';

import { ProfileEditComponent } from './profile-edit.component';

describe('ProfileEditComponent', () => {
  let component: ProfileEditComponent;
  let fixture: ComponentFixture<ProfileEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileEditComponent ],
      imports : [ ReactiveFormsModule, StoreModule.forRoot({}), HttpClientModule],
      providers : [UsersService, HttpService, HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if fields are required', () =>{
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('');
    last_name.setValue('');

    expect(first_name.valid).toBeFalsy();
    expect(last_name.valid).toBeFalsy();
  });

  it('should check if form is valid', ()=>{
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('carlos');
    last_name.setValue('menem');

    expect(component.form.valid).toBeTruthy();
  });

  it('should check if form is invalid because of first name', () => {
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('');
    last_name.setValue('menem');

    expect(component.form.valid).toBeFalsy();
  })

  it('should check if form is invalid because of last name', () => {
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('carlos');
    last_name.setValue('');

    expect(component.form.valid).toBeFalsy();
  });

  it('should check if form is invalid because of first name pattern', () => {
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('carlos95');
    last_name.setValue('menem');

    expect(component.form.valid).toBeFalsy();
  });

  it('should check if form is invalid because of last name pattern', () => {
    const first_name=component.form.controls['first_name'];
    const last_name=component.form.controls['last_name'];

    first_name.setValue('carlos');
    last_name.setValue('menem99');

    expect(component.form.valid).toBeFalsy();
  });



});
