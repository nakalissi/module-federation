import { Component } from '@angular/core';
import { AuthLibService } from 'auth-lib';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {
  cartItems: CartItem[] = [
    { name: 'Notebook', price: 3500, quantity: 1, image: 'assets/notebook.jpg' },
    { name: 'Mouse', price: 120, quantity: 2, image: 'assets/mouse.jpg' },
    { name: 'Teclado', price: 250, quantity: 1, image: 'assets/teclado.jpg' }
  ];

  constructor(private service: AuthLibService) {
    console.log('User Name', this.service.user);
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }
}
