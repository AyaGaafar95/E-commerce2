import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(private httpclient: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/login`, credentials);
  }

  register(user: any): Observable<any> {
    return this.httpclient.post<any>(`${this.baseUrl}/users`, user);
  }
  // register(userData: object): Observable<any> {
  //   return this.httpclient.post(`https://fakestoreapi.com/users`, userData);
  // }

  // login(userData: object): Observable<any> {
  //   return this.httpclient.post(
  //     `https://fakestoreapi.com/auth/login`,

  //     userData
  //   );
  // }
}
// `https://ecommerce.routemisr.com/api/v1/auth/signup`
