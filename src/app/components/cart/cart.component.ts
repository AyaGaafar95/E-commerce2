import { Component, OnInit, Renderer2 } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService, private renderer2: Renderer2) {}
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
  changCount(
    id: string,
    count: number,
    btn1: HTMLButtonElement,
    btn2: HTMLButtonElement
  ) {
    if (count >= 1) {
      this.renderer2.setAttribute(btn1, 'disapled', ' true');
      this.renderer2.setAttribute(btn2, 'disapled', ' true');

      console.log(count);
      this.cartService.updateCount(id, count).subscribe({
        next: (response) => {
          console.log(response);
          this.cartDetails = response.data;
          this.renderer2.removeAttribute(btn1, 'disapled');
          this.renderer2.removeAttribute(btn2, 'disapled');
        },
        error: () => {
          this.renderer2.removeAttribute(btn1, 'disapled');
          this.renderer2.removeAttribute(btn2, 'disapled');
        },
      });
    }
  }
}
