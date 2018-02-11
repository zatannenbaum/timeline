import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { User } from '../models/user';

import { environment } from '../../environments/environment';

@Injectable()
export class UserService {

  user: User;

  constructor( private http: HttpClient ) { }

  getUser(): Observable<User> {
    if (this.user) {
      return of(this.user);
    }
    let url: string = `${environment.base_url}/api/user/account/`;
    return this.http.get<User>(url);
  }
}
