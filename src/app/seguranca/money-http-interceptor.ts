import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

import { Observable, from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

import { AuthService } from './auth.service';

// Classe utilizada para conseguir capturar o erro de refreshToken em error-handler-service.ts
export class NotAuthenticatedError {}


@Injectable()
export class MoneyHttpInterceptor implements HttpInterceptor {

    constructor(private auth: AuthService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      if (!req.url.includes('/oauth/token') && this.auth.isAccessTokenInvalido()) {

        return from(this.auth.obterNovoAccessToken())
            .pipe(
                mergeMap(() => {
                  if (this.auth.isAccessTokenInvalido()) {
                    // Classe utilizada para conseguir capturar o erro de refreshToken em error-handler-service.ts
                    throw new NotAuthenticatedError();
                  }

                  req = req.clone({
                      setHeaders: {
                          Authorization: `Bearer ${localStorage.getItem('token')}`
                      }
                  });
                  console.log('Access token renovado no money-http-interceptor');
                  return next.handle(req);
                })
            );
        }

      return next.handle(req);
    }
}
