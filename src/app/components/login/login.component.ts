import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  // ده الاوبجكت اللي هيروح للباك registerForm
  // بتعمل جروبيج لمجموعه انبوتس registerForm
  //  كل انبوت او  بروبرتي = هي فورم كنترول
  loginForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });
  userName = '';
  errorMessage: string = '';
  handleForm(): void {
    if (this.loginForm.valid == true) {
      // console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('_toaken', response.token);
          this.authService.saveUserData();
          // this.userName = this.authService.userInfo;
          if (response.message === 'success') {
            this.router.navigate(['/home'], {
              queryParams: { userName: this.userName },
            });
          }
        },
        (error) => {
          console.log(error);
          this.errorMessage = error.error.message;

          // Error handling code here
        }
      );
    }
  }
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
