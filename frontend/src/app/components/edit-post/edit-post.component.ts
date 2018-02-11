import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

import * as moment from 'moment';

import { Post } from '../../models/post';

import { PostService }  from '../../services/post.service';


@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.css']
})
export class EditPostComponent implements OnInit {

  post: Post = {
    uuid: '',
    created_by_user: null,
    title: '',
    content: '',
    date_created: null,
    date_updated: null,
    date_of_event: null,
    image_url: null
  };
  imageChangedEvent: any = '';
  image: any = '';
  date_of_event: any;
  loadingImage: boolean = true;
  imageChanged: boolean = false;

  overallErrorMsg = '';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getPost();
  }

  getPost(): void {
    const uuid = this.route.snapshot.paramMap.get('uuid');
    this.postService.getPost(uuid)
        .subscribe(resp => {
          this.post = resp;
          this.getImage();
          if (this.post.date_of_event) {
            this.date_of_event = moment(this.post.date_of_event).toDate()
          }
        })
  }

  getImage(): void {
    if (this.post.image_url) {

      this.http
          .get(this.post.image_url, { responseType: 'blob' })
          .subscribe(
            data => {
              console.log(data)
              this.createImageFromBlob(data);
              this.loadingImage = false;
            },
            err => {
              console.log(err)
              this.loadingImage = false;
            }
          )
    } else {
      this.loadingImage = false;
    }
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

  updatePost(event: Event) {
    event.preventDefault();

    let data = {
      'title': this.post.title,
      'content': this.post.content
    };

    if (this.date_of_event) {
      data['date_of_event'] = this.date_of_event.getTime()
    }

    this.postService.updatePost(this.post.uuid, data)
        .subscribe(
          resp => {
            this.router.navigate(['/timeline']);
            this.image = '';
          },
          err => {
            this.overallErrorMsg = 'Could not update the post.';
          }
        );
  }

  archive(): void {
    this.postService.archivePost(this.post.uuid)
        .subscribe(
          resp => {
            this.router.navigate(['/timeline']);
          }
        )
  }

  // fileChangeEvent(event: any): void {
  //   this.imageChanged = true;
  //   this.imageChangedEvent = event;
  // }
  // imageCropped(image: string) {
  //   this.image = image;
  //   console.log(image.substring(22, 50))
  //   console.log(this.image.substring(22, 50))
  // }

}
