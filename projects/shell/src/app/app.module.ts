import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { APP_ROUTES } from './app.routes';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthLibModule } from 'auth-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import * as Sentry from '@sentry/angular';
import { SharedLibModule } from 'projects/shared-lib/src/public-api';

Sentry.init({
  dsn: "https://8578a46faf9b8a697a6c67558a2c8427@o4509238731669504.ingest.us.sentry.io/4509238737829888",
  sendDefaultPii: true,
  integrations: [],
  tracesSampleRate: 1.0,
});

@NgModule({
  imports: [
    BrowserModule,
    AuthLibModule,
    SharedLibModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: false,
      }),
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
