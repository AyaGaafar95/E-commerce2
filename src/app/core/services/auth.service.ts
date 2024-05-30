import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclient: HttpClient, private router: Router) {}

  userInfo: any;
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/auth/';

  register(userData: object): Observable<any> {
    return this.httpclient.post(this.baseUrl + 'signup', userData);
  }

  login(userData: object): Observable<any> {
    return this.httpclient.post(this.baseUrl + 'signin', userData);
  }
  saveUserData() {
    const encode = localStorage.getItem('_toaken');
    if (encode) {
      const decode = jwtDecode(encode);
      console.log(decode);
     this.userInfo = decode
    }
  }
}
// `https://ecommerce.routemisr.com/api/v1/auth/signup`
