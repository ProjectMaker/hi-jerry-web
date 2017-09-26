import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../shared/authentication/services/authentication.service';
import { SocialFacebookService } from '../../../shared/social/services/social-facebook.service';

@Component({
  selector: 'kl-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  protected userExists:boolean = false;
  public constructor(private authenticationServiceService:AuthenticationService, private fb:SocialFacebookService, private router:Router) { }
  public ngOnInit() {
    console.log('RegisterComponent init');
  }

  protected register(value:any) {
    this.authenticationServiceService.register(value)
      .subscribe(
        (r) => this.router.navigate(['/front/account/signin']),
        (err) => {
          err = err.json();
          if (err.code === 'register:exists') this.userExists = true;
        },
        () => console.log('complete')
      )
  }

  protected loginFB() {
    this.fb.login()
      .concatMap(account => this.authenticationServiceService.signin('facebook', account))
      .subscribe(
        (r) => this.router.navigate(['/front/account/signin']),
        (err) => {
          err = err.json();
          if (err.code === 'register:exists') this.userExists = true;
        },
        () => console.log('complete')
      )
  }

  protected logoutFB() {
    this.fb.logout();
  }
}