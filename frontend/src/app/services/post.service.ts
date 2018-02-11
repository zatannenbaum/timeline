import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { environment } from '../../environments/environment';


@Injectable()
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(page_number: number, ordering: string): Observable<any> {
    let url: string = `${environment.base_url}/api/post/?page=${page_number}&ordering=${ordering}`;
    return this.http.get(url)
  }

  getPost(uuid: string): Observable<any> {
    let url: string = `${environment.base_url}/api/post/${uuid}/`
    return this.http.get(url);
  }

  addPost(body: object): Observable<any> {
    let url: string = `${environment.base_url}/api/post/`;
    return this.http.post(url, body);
  }

  updatePost(uuid: string, body: object): Observable<any> {
    let url: string = `${environment.base_url}/api/post/${uuid}/`;
    return this.http.put(url, body);
  }

  archivePost(uuid: string): Observable<any> {
    let url: string = `${environment.base_url}/api/post/${uuid}/archive/`
    return this.http.post(url, {});
  }

}
