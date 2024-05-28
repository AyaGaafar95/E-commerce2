import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  baseUrl: string = 'https://ecommerce.routemisr.com/api/v1/';

  constructor(private httpclient: HttpClient) {}

  getAllProducts(): Observable<any> {
    return this.httpclient.get(this.baseUrl + 'products');
  }
  getProductDetailsById(id: string): Observable<any> {
    return this.httpclient.get(this.baseUrl + `products/${id}`);
  }
}
