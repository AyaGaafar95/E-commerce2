import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private activateRoute: ActivatedRoute,
    private productsService: ProductsService
  ) {}
  productId: any;
  // productDetailsObj: {} = {};
  productDetailsObj: any = {};
  ngOnInit(): void {
    this.getIdFromPrameterUrl();
    this.getDataFromResponse();
  }
  //  getIdFromPrameterUrl
  getIdFromPrameterUrl() {
    this.activateRoute.paramMap.subscribe({
      next: (prameter) => {
        console.log(prameter.get('id'));
        this.productId = prameter.get('id');
      },
    });
  }
  //acces service and call api then get data from response

  getDataFromResponse() {
    this.productsService.getProductDetailsById(this.productId).subscribe({
      next: (response) => {
        console.log(response); //console will showing all product details from response
        this.productDetailsObj = response.data;
      },
    });
  }
}
