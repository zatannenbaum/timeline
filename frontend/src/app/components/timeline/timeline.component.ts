import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
  posts: Post[];

  ordering: string = 'date_created'
  ascending: string = '-';

  page: number = 1;
  totalPages: number;
  postsOnPage: number;
  totalPosts: number;


  constructor(
    private postService: PostService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts(): void {
    let orderFilter = this.ascending + this.ordering;
    this.postService.getPosts(this.page, orderFilter)
        .subscribe(resp => {
          this.posts = resp['results'];
          this.postsOnPage = this.posts.length;
          this.totalPosts = resp['count'];
          this.totalPages = Math.ceil(this.totalPosts / 10)
        });
  }

  changeOrder(ordering: string, ascending: string): void {
    this.ordering = ordering;
    this.ascending = ascending;
    this.getPosts()
  }

  changePage(newPage: number): void {
    this.page = newPage;
    this.getPosts()
  }

}
