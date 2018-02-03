import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Login } from '../models/login';

import { environment } from '../../environments/environment';


@Injectable()
export class AuthService {

  token: string;
  private headers: HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor( private http: HttpClient ) { }

  isValid(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }
    return false;
  }

  login(loginForm: Login): Observable<any> {
    let url: string = `${environment.base_url}/api/login/`;

    return this.http.post(url, loginForm, {headers: this.headers});
  }

  logout(): void {
    localStorage.clear();
  }
}
