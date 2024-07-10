import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent implements OnInit {
  constructor(private activateRoute: ActivatedRoute) {}
  cartId: any;
  ngOnInit(): void {
    this.catchIdFromUrl();
  }

  catchIdFromUrl() {
    this.activateRoute.paramMap.subscribe({
      next: (params) => {
        this.cartId = params.get('id');
      },
      error: () => {},
    });
  }

  checkOutForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });
  handelForm(): void {
    console.log(this.checkOutForm.value);
    console.log(this.cartId);
  }
}
