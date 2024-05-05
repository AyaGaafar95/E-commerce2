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
    console.log(this.registerForm.value);
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
