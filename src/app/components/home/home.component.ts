import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/services/auth.service';
import { CartService } from 'src/app/core/services/cart.service';
import { Categories } from 'src/app/core/services/interfaces/categories';
import { ProductsService } from 'src/app/core/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private productsService: ProductsService,
    private cartService: CartService,
    private toastr: ToastrService
  ) {}
  userName: string | undefined;
  name = '';
  productsArray: any[] = [];
  categoriesArray: Categories[] = [];
  ngOnInit(): void {
    this.catshUserName();
    this.getAllproducts();
    this.getCategories();
  }
  catshUserName() {
    this.name = this.authService.userInfo;
    this.route.queryParamMap.subscribe((params) => {
      this.userName = this.userName !== null ? this.userName : undefined;
    });
  }
  getAllproducts() {
    this.productsService.getAllProducts().subscribe({
      next: (response) => {
        console.log(response.data);
        this.productsArray = response.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  getCategories() {
    this.productsService.getProductCategories().subscribe({
      next: (result) => {
        console.log('this is categories', result.data);
        this.categoriesArray = result.data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }
  addProductToCart(id: string): void {
    this.cartService.addToCartItem(id).subscribe({
      next: (response) => {
        console.log(response);
        this.toastr.success(response.message, 'Toastr fun!');
      },
    });
  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    autoplay: true,
    autoplayTimeout: 3000,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 2,
      },
      400: {
        items: 3,
      },
      740: {
        items: 4,
      },
      940: {
        items: 5,
      },
    },
    nav: false,
  };

  mainSlidOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    items: 1,
    nav: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplaySpeed: 1000,
  };
}
