import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const localStorageJwtToken = localStorage.getItem('jwtToken');
    if (localStorageJwtToken != null) {
      request = request.clone({headers: request.headers.set('Authorization', localStorageJwtToken)});
    }
    return next.handle(request);
  }
}
