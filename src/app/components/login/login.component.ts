import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}

  // login() {
  //   if ((this.email = '')) {
  //     alert('please inter email');
  //     return;
  //   }
  //   if ((this.password = '')) {
  //     alert('please inter password');
  //     return;
  //   }
  //   this.authService.login(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  // }
}
