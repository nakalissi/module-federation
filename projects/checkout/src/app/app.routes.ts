import { Routes } from '@angular/router';
import { CartComponent } from './checkout/cart/cart.component';

export const APP_ROUTES: Routes = [
    { path: '', component: CartComponent, pathMatch: 'full' }
];
