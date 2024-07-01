import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss'],
})
export class PaymentComponent {
  checkOutForm: FormGroup = new FormGroup({
    details: new FormControl(''),
    phone: new FormControl(''),
    city: new FormControl(''),
  });
  handelForm(): void {
    console.log(this.checkOutForm.value);
  }
}
