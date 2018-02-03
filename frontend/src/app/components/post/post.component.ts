import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { PostService }  from '../../services/post.service';

import { Post } from '../../models/post'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location
  ) { }

  ngOnInit() {
    // this.getPost();
  }

  // getPost(): void {
  //   const uuid = this.route.snapshot.paramMap.get('uuid');
  //   this.postService.getPost(uuid)
  //     .subscribe(post => this.post = post);
  // }

  goBack(): void {
    this.location.back();
  }

}
