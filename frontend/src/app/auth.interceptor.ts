import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../environments/environment';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Get the auth header from the service.
    if (req.url.indexOf(environment.base_url) === 0) {
      const authToken = localStorage.getItem('token');
      let authReq = req;
      // Clone the request to add the new header.
      if (authToken) {
        authReq = req.clone({setHeaders: {Authorization: 'Token ' + authToken}});
      }

      // Pass on the cloned request instead of the original request.
      return next.handle(authReq);
    }
    else if (req.url.indexOf(environment.aws_url) === 0) {
      const aws_key = localStorage.getItem('aws_key')
      const aws_md5 = localStorage.getItem('aws_md5')

      let awsReq = req.clone({setHeaders: {
          'Content-Type': 'image/png',
          'x-amz-server-side-encryption-customer-algorithm': 'AES256',
          'x-amz-server-side-encryption-customer-key': aws_key,
          'x-amz-server-side-encryption-customer-key-MD5': aws_md5
        }
      })
      // Pass on the cloned request instead of the original request.
      return next.handle(awsReq);
    }

    return next.handle(req);
  }
}
