import { ErrorHandler } from '@angular/core';
import * as Sentry from '@sentry/angular';

export class GlobalErrorHandler implements ErrorHandler {
  handleError(error: any): void {
    Sentry.captureException(error);
    console.error('Global Error:', error);
  }
}