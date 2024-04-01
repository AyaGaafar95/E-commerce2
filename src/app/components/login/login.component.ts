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
    console.log(this.loginForm);
    if (this.loginForm.valid == true) {
      console.log(this.loginForm.value);
    }
    const data = this.loginForm.value;
    this.authService.login(data).subscribe({
      next: (Response) => {
        console.log(Response);
        if (Response.message === 'success') {
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        console.log(err);
        this.errorMessage = err.error.message;
      },
    });
  }
}
