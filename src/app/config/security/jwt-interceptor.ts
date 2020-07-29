import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthenticationService } from 'src/app/service/authentication.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private authenticationService: AuthenticationService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        
        let currentUser = this.authenticationService.currentUserValue;
        console.log('currentUser: ', currentUser);
        if (currentUser && currentUser.token) {
            console.log('enviando jwt');
            request = request.clone({
                setHeaders: {
                    //Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ6aW1haGFiYSIsImV4cCI6MTU5NjMyNjY1NH0.Yg-jkq23Hc5bi8dFxiWMpBlA89_egwi1dNYLzy2H3CjsARE73tv8S6hysgQ6_OYgbgKNrYeQkQNIrEOQE7IIxQ`
                    Authorization: `${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }

}
