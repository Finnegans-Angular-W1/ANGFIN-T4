import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-e404',
  templateUrl: './e404.component.html',
  styleUrls: ['./e404.component.scss']
})
export class E404Component implements OnInit {

    onClick() {
      this.router.navigateByUrl("/home");
    }

  constructor(private router:Router) {
   }

  ngOnInit(): void {
  }



}
