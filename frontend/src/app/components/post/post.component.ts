import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import * as moment from 'moment';

import { PostService }  from '../../services/post.service';

import { Post } from '../../models/post'


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;

  image: any = '';
  date_of_event: any = false;
  date_created: any;
  loadingImage: boolean = false;
  show: boolean = false;
  show_option: string = '+ Show More';

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private location: Location,
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.getImage();
    this.getDates();
  }

  // getPost(): void {
  //   const uuid = this.route.snapshot.paramMap.get('uuid');
  //   this.postService.getPost(uuid)
  //     .subscribe(post => this.post = post);
  // }

  getImage(): void {
    if (this.post.image_url) {
      this.loadingImage = true;

      this.http
          .get(this.post.image_url, { responseType: 'blob' })
          .subscribe(
            data => {
              this.createImageFromBlob(data);
              this.loadingImage = false;
            },
            err => {
              console.log(err)
              this.loadingImage = false;
            }
          )
    }
  }

  getDates(): void {
    if (this.post.date_of_event) {
      this.date_of_event = moment(this.post.date_of_event).format("MMM D, YYYY");
    }
    this.date_created = moment(this.post.date_created).fromNow()
  }

  createImageFromBlob(blob: Blob) {
    let reader = new FileReader();
    reader.addEventListener("load", () => {
      this.image = reader.result;
    }, false);

    if (blob) {
      reader.readAsDataURL(blob);
    }
  }

  goBack(): void {
    this.location.back();
  }

  showOrHide(): void {
    this.show = !this.show;

    if (this.show) {
      this.show_option = '- Show Less';
    } else {
      this.show_option = '+ Show More';
    }
  }

}
