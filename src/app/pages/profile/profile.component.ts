import { Component, Inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  firtsname: string;
  lastname: string;
  useremail: string;
  useramount: number;
  constructor() { 
    this.firtsname = 'Cacho';
    this.lastname = 'Castaña';
    this.useramount = 99999;
    this.useremail = 'a@a.com';
  }

  ngOnInit(): void {
  }

}
