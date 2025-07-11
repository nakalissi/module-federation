import { Routes } from '@angular/router';
import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { LazyComponent } from './lazy/lazy.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';

export const CHECKOUT_ROUTES: Routes = [
  {
    path: 'flights-search',
    component: FlightsSearchComponent
  },
  {
    path: 'lazy',
    component: LazyComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'payment',
    component: PaymentComponent
  }
];
