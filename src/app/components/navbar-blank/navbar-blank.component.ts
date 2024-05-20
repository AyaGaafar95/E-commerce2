import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss'],
})
export class NavbarBlankComponent {
  constructor(private router: Router) {}
  signOut(): void {
    localStorage.removeItem('_toaken');
    this.router.navigate(['/login']);
  }
}
