import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { PostService }  from '../../services/post.service';


@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  acceptedMimeTypes = [
    'image/jpeg',
    'image/png'
  ];

  imageChangedEvent: any = '';
  croppedImage: any = '';

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }
  imageCropped(image: string) {
    this.croppedImage = image;
  }

  overallErrorMsg = '';

  body = {
    date_of_event: new Date(),
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

    let data = {};

    // get only the base64 file
    if (this.croppedImage.length > 0) {
      data = {
        'image': this.croppedImage,
        'title': this.body.title,
        'date_of_event': this.body.date_of_event.getTime(),
        'content': this.body.content
      };
    } else {
      data = {
        'title': this.body.title,
        'date_of_event': this.body.date_of_event.getTime(),
        'content': this.body.content
      };
    }

    console.log(data)

    this.postService.addPost(data)
        .subscribe(
          resp => {
            console.log(resp)
            // this.router.navigate(['/timeline']);
            this.croppedImage = '';
          },
          err => {
            this.overallErrorMsg = 'Could not create a new post.';
          }
        );


  }

}
