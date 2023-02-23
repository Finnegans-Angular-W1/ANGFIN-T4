import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../core/state/app.state';
import { Router } from '@angular/router';
import { logout } from '../../core/state/actions/auth.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidenav-drawer-overview-example.css'],
})
export class SidebarComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor ( private store: Store<AppState>, private router: Router) {}

  logout() {
    this.store.dispatch(logout());
    window.location.href = '/login';
    // this.router.navigateByUrl('/login');
  };
}
