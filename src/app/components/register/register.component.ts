import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  registerForm: FormGroup = new FormGroup({
    name: new FormControl(null, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
    ]),
    email: new FormControl('',[Validators.required,Validators.email]),
    password: new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    rePassword: new FormControl('',[Validators.required,Validators.pattern(/^\w{6,}$/)]),
    phone: new FormControl('',[Validators.required,Validators.pattern(/^01[0125][0-9]{8}$/)]),
  });
  hundleForm(): void {
    console.log(this.registerForm);
  }
}
// https://documenter.getpostman.com/view/5709532/2s93JqTRWN
