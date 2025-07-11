import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface CartItem {
  name: string;
  price: number;
  quantity: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  animations: []
})
export class CartComponent {
  cartItems: CartItem[] = [
    { name: 'Produto 1', price: 50, quantity: 1 },
    { name: 'Produto 2', price: 30, quantity: 2 }
  ];

  checkoutForm: FormGroup;

  constructor(private fb: FormBuilder) {
    console.log('>>>>>>>>>>>>>>>>', fb);

    this.checkoutForm = this.fb.group({
      address: [''],
      payment: ['']
    });
  }

  get total() {
    return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }

  onSubmit() {
    if (this.checkoutForm.valid) {
      // Process checkout
      alert('Pedido realizado!');
    }
  }
}