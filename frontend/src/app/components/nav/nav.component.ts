import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  user: User = {
    uuid: '',
    email: '',
    first_name: '',
    last_name: '',
    full_name: '',
  }

  constructor(
    private auth: AuthService,
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getUser()
  }

  getUser(): void {
    this.userService.getUser()
      .subscribe(user => this.user = user)
  }

  logout(): void {
    this.auth.logout();
    this.router.navigateByUrl('/');
  }
}
