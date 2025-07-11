import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { APP_ROUTES } from './app.routes';
import { HttpClientModule } from '@angular/common/http';
import { CheckoutModule } from './checkout/checkout.module';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    CheckoutModule,
    RouterModule.forRoot(APP_ROUTES),
    CommonModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
