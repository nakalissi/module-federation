import * as Sentry from '@sentry/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SentryService {
  captureException(error: any): void {
    Sentry.captureException(error);
  }

  captureMessage(message: string): void {
    Sentry.captureMessage(message);
  }
}