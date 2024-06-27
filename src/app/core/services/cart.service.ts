import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  myToaken: any = {
    token: localStorage.getItem('_toaken'),
  };
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';
  constructor(private httpclient: HttpClient) {}
  addToCartItem(prodId: string): Observable<any> {
    return this.httpclient.post(
      this.baseUrl + `cart`,
      {
        productId: prodId,
      },
      {
        headers: this.myToaken,
      }
    );
  }
  // addCartUser():Observable<any>{

  // }
  addCartUser(): Observable<any> {
    return this.httpclient.get(this.baseUrl + `cart`, {
      headers: this.myToaken,
    });
  }

  removeCartItem(prodId: string): Observable<any> {
    return this.httpclient.delete(this.baseUrl + `cart/${prodId}`, {
      headers: this.myToaken,
    });
  }
  updateCount(prodId: string, countNumber: number): Observable<any> {
    return this.httpclient.put(this.baseUrl + `cart/${prodId}`, {
      count: countNumber,
    },
    {
      headers:this.myToaken

    }
  );
  }
}
