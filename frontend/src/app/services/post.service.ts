import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Post } from '../models/post';
import { POSTS } from '../mock-posts';

import { environment } from '../../environments/environment';


@Injectable()
export class PostService {

  constructor(
    private http: HttpClient,
  ) { }

  getPosts(): Observable<Post[]> {
    return of(POSTS);
  }

  getPost(uuid: string): Observable<Post> {
    return of(POSTS.find(post => post.uuid === uuid));
  }

  addPost(body: object): Observable<any> {
    let url: string = `${environment.base_url}/api/post/`;

    return this.http.post(url, body);
  }

}
