import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  constructor(private authenticationService: AuthenticationService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (environment.security) {
      let currentUser = this.authenticationService.currentUserValue;

      if (currentUser && currentUser.token) {
        request = request.clone({
          setHeaders: {
            Authorization: `${currentUser.token}`,
          },
        });
      }
    }

    return next.handle(request);
  }
}
