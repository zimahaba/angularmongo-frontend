import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerOverlayService } from '../infra/spinner/spinner-overlay.service';

@Injectable()
export class SpinnerInterceptor implements HttpInterceptor {
  constructor(private spinnerOverlayService: SpinnerOverlayService) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.spinnerOverlayService.show('Loading...');
    return next
      .handle(request)
      .pipe(finalize(() => this.spinnerOverlayService.hide()));
  }
}
