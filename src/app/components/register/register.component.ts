import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  constructor(private authService: AuthService, private router: Router) {}
  email: string = '';
  password: string = '';
  errorMessage: string = '';
  loginForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });
  handleForm(): void {
    // console.log(this.loginForm);
    // if (this.loginForm.valid == true) {
    //   console.log(this.loginForm.value);
    // }
    // const data = this.loginForm.value;
    // this.authService.login(data).subscribe({
    //   next: (Response) => {
    //     console.log(Response);
    //     if (Response.message === 'success') {
    //       this.router.navigate(['/home']);
    //     }
    //   },
    //   error: (err) => {
    //     console.log(err);
    //     this.errorMessage = err.error.message;
    //   },
    // });
  }
  register() {
    if ((this.email = '')) {
      alert('please inter email');
      return;
    }
    if ((this.password = '')) {
      alert('please inter password');
      return;
    }
    this.authService.login(this.email, this.password);
    this.email = '';
    this.password = '';
  }
}
// https://documenter.getpostman.com/view/5709532/2s93JqTRWN
