import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';

import { FlightsSearchComponent } from './flights-search/flights-search.component';
import { CHECKOUT_ROUTES } from './checkout.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';
import { LazyComponent } from './lazy/lazy.component';
import { PaymentComponent } from './payment/payment.component';
import { CartComponent } from './cart/cart.component';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(CHECKOUT_ROUTES),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatTableModule
  ],
  declarations: [
    FlightsSearchComponent,
    LazyComponent,
    CartComponent,
    PaymentComponent
  ],
  exports: [CartComponent]
})
export class CheckoutModule { }
