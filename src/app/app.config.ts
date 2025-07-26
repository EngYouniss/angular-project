import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { sendEmailInterceptor } from './client/interceptors/send-email.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { LoadingInterceptorService } from './client/interceptors/loading-interceptor.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes),provideHttpClient(withFetch(),withInterceptors([sendEmailInterceptor,LoadingInterceptorService])), 
    provideAnimations()
],
};
