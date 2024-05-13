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
  // ده الاوبجكت اللي هيروح للباك registerForm
  // بتعمل جروبيج لمجموعه انبوتس registerForm
  //  كل انبوت او  بروبرتي = هي فورم كنترول
  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    rePassword: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\w{6,}$/),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^01[0125][0-9]{8}$/),
    ]),
  });

  errorMessage: string = '';
  handleForm(): void {
    if (this.registerForm.valid == true) {
      // console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
        (response) => {
          console.log(response);
          if (response.message === 'success') {
            this.router.navigate(['/login']);
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
  // register() {
  //   if ((this.email = '')) {
  //     alert('please inter email');
  //     return;
  //   }
  //   if ((this.password = '')) {
  //     alert('please inter password');
  //     return;
  //   }
  //   this.authService.register(this.email, this.password);
  //   this.email = '';
  //   this.password = '';
  // }
}
