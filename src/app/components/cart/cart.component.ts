import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}
  cartDetails: any = {};
  ngOnInit(): void {
    this.whatIsInCart();
  }
  whatIsInCart() {
    this.cartService.addCartUser().subscribe({
      next: (result) => {
        console.log('cart', result);
        this.cartDetails = result.data;
      },
    });
  }

  removeProduct(id: string): void {
    this.cartService.removeCartItem(id).subscribe({
      next: (response) => {
        console.log('remove', response.data);
        this.cartDetails = response.data;
      },
    });
  }
}
