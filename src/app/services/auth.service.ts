import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpclient: HttpClient) {}

  register(userData: object): Observable<any> {
    return this.httpclient.post(`https://fakestoreapi.com/users`, userData);
  }

  login(userData: object): Observable<any> {
    return this.httpclient.post(
      `https://fakestoreapi.com/auth/login`,
      userData
    );
  }
}
// `https://ecommerce.routemisr.com/api/v1/auth/signup`
