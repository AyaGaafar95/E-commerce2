import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private productsService: ProductsService
  ) {}
  userName: string | undefined;
  name = '';
  productsArray: any[] = [];
  ngOnInit(): void {
    this.catshName();
    this.getAllproducts();
  }
  catshName() {
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
}
