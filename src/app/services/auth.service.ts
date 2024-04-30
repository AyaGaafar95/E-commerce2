import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Token } from '@angular/compiler';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';
  constructor(
    private httpclient: HttpClient,
    // private fireauth: AngularFireAuth,
    private router: Router
  ) {}

  // login(credentials: any): Observable<any> {
  //   return this.httpclient.post<any>(`${this.baseUrl}/login`, credentials);
  // }

  // register(user: any): Observable<any> {
  //   return this.httpclient.post<any>(`${this.baseUrl}/users`, user);
  // }
  // register(userData: object): Observable<any> {
  //   return this.httpclient.post(`https://fakestoreapi.com/users`, userData);
  // }

  // login(userData: object): Observable<any> {
  //   return this.httpclient.post(
  //     `https://fakestoreapi.com/auth/login`,

  //     userData
  //   );
  // }
  // login(email: string, passowrd: string) {
  //   this.fireauth.signInWithEmailAndPassword(email, passowrd).then(
  //     () => {
  //       localStorage.setItem('token', 'true');
  //       this.router.navigate(['/home']);
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.router.navigate(['/login']);
  //     }
  //   );
  // }
  // register
  // register(email: string, password: string) {
  //   this.fireauth.createUserWithEmailAndPassword(email, password).then(
  //     () => {
  //       alert('Registration successful');
  //       this.router.navigate(['/login']);
  //     },
  //     (error) => {
  //       alert(error.message);
  //       this.router.navigate(['/register']);
  //     }
  //   );
  // }

  // sign out
  // logOut() {
  //   this.fireauth.signOut().then(
  //     () => {
  //       localStorage.removeItem('token');
  //       this.router.navigate(['/login']);
  //     },
  //     (err) => {
  //       alert(err.message);
  //     }
  //   );
  // }
}
// `https://ecommerce.routemisr.com/api/v1/auth/signup`
