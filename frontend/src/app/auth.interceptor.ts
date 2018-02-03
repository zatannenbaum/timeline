import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    const authToken = localStorage.getItem('token');
    let authReq = req;
    // Clone the request to add the new header.
    if (authToken) {
      authReq = req.clone({setHeaders: {Authorization: 'Token ' + authToken}});
    }

    // Pass on the cloned request instead of the original request.
    return next.handle(authReq);
  }
}
