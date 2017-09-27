import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../shared/authentication/services/authentication.service';
import { SocialFacebookService } from '../../../shared/social/services/social-facebook.service';

@Component({
  selector: 'kl-signin',
  templateUrl: './signin.html'
})
export class SigninComponent implements OnInit {
  protected userNotExists:boolean = false;
  public constructor(private authenticationServiceService:AuthenticationService, private fb:SocialFacebookService, private router:Router) { }

  public ngOnInit() {
    console.log('LoginComponent init');
  }

  protected signin(value:any) {
    this.authenticationServiceService.signin('local', value)
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
      .concatMap(account => this.authenticationServiceService.signin('facebook', account))
      .subscribe(
        (r) => this.router.navigate(['/front/my-places']),
        (err) => {
          err = err.json();
        },
        () => console.log('complete')
      )
  }
}