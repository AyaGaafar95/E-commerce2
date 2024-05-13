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
  // ده الاوبجكت اللي هيروح للباك registerForm
  // بتعمل جروبيج لمجموعه انبوتس registerForm
  //  كل انبوت او  بروبرتي = هي فورم كنترول
  registerForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
  });

  errorMessage: string = '';
  handleForm(): void {
    if (this.registerForm.valid == true) {
      // console.log(this.registerForm.value);
      this.authService.login(this.registerForm.value).subscribe(
        (response) => {
          console.log(response);
          localStorage.setItem('_toaken', response.token);
          this.authService.saveUserData();
          if (response.message === 'success') {
            this.router.navigate(['/home']);
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
