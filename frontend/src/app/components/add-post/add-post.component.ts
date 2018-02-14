import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PostService }  from '../../services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  imageChangedEvent: any = '';
  croppedImage: any = '';
  date_of_event: Date;
  saving: boolean = false;

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }

  overallErrorMsg = '';

  body = {
    title: '',
    content: ''
  }

  constructor(
    private postService: PostService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  createPost(event: Event) {
    event.preventDefault();

    this.saving = true;
    let data = {};

    // get only the base64 file
    if (this.croppedImage.length > 0) {
      data = {
        'image': this.croppedImage,
        'title': this.body.title,
        'content': this.body.content
      };
    } else {
      data = {
        'title': this.body.title,
        'content': this.body.content
      };
    }

    if (this.date_of_event) {
      data['date_of_event'] = this.date_of_event.getTime()
    }

    this.postService.addPost(data)
        .subscribe(
          resp => {
            this.saving = false;
            this.router.navigate(['/timeline']);
            this.croppedImage = '';
          },
          err => {
            this.saving = false;
            this.overallErrorMsg = 'Could not create a new post.';
          }
        );
  }

}
