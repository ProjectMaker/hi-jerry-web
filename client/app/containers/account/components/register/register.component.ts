import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../../../core/services';
import { SocialFacebookService } from '../../../../core/services';

@Component({
  selector: 'kl-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  protected userExists:boolean = false;
  public constructor(private auth:AuthService, private fb:SocialFacebookService, private router:Router) { }
  public ngOnInit() {
    console.log('RegisterComponent init');
  }

  protected register(value:any) {
    this.auth.register(value)
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
      .concatMap(account => this.auth.signin('facebook', account))
      .subscribe(
        (r) => this.router.navigate(['/front/my-places']),
        (err) => {
          err = err.json();
          if (err.code === 'register:exists') this.userExists = true;
        },
        () => console.log('complete')
      )
  }
}