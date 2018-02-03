import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  title: string = 'Our Timeline';
  loggedIn: boolean = false;

  constructor( private router: Router ) { }

  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.loggedIn = true;
    }
  }

}
