import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { Login } from '../../models/login';
import { User } from '../../models/user';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: Login = new Login()

  user: User;
  return: string = '';


  constructor(
    private auth: AuthService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.auth.isValid()) {
      this.router.navigateByUrl('/timeline');
    }

    this.route.queryParams
      .subscribe(params => this.return = params['return'] || '/timeline');
  }

  login(): void {
    if (!this.loginForm.username || !this.loginForm.password) {
      return;
    }
    this.auth.login(this.loginForm)
        .subscribe(data => {
          localStorage.setItem('token', data['token']);

          this.router.navigateByUrl(this.return);
        })
  }

}
