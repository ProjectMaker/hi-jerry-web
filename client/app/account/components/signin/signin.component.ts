import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth/auth.service';
import { SocialFacebookService } from '../../../core/services/social/social-facebook.service';

@Component({
  selector: 'kl-signin',
  templateUrl: './signin.html'
})
export class SigninComponent implements OnInit {
  protected userNotExists:boolean = false;
  public constructor(private auth:AuthService, private fb:SocialFacebookService, private router:Router) { }

  public ngOnInit() {
    console.log('LoginComponent init');
  }

  protected signin(value:any) {
    this.auth.signin('local', value)
      .subscribe(
        (r) => this.router.navigate(['/front/my-places']),
        (err) => {
          err = err.json();
          if (err.code === 'signin:notfound') this.userNotExists = true;
          console.log(err)
        },
        () => console.log('complete')
      )
  }

  protected loginFB() {
    this.fb.login()
      .concatMap(account => this.auth.signin('facebook', account))
      .subscribe(
        (r) => this.router.navigate(['/front/my-places']),
        (err) => {
          err = err.json();
        },
        () => console.log('complete')
      )
  }
}