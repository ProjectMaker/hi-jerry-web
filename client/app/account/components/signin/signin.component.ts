import { Component, OnInit } from '@angular/core';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthenticationService } from '../../../shared/authentication/services/authentication.service';

@Component({
  selector: 'kl-signin',
  templateUrl: './signin.html'
})
export class SigninComponent implements OnInit {
  protected userNotExists:boolean = false;
  public constructor(private authenticationServiceService:AuthenticationService, private authHttp:AuthHttp) { }

  public ngOnInit() {
    console.log('LoginComponent init');
  }

  protected signin(value:any) {
    console.log('SIGNIN')
    this.authenticationServiceService.signin(value)
      .subscribe(
        (r) => {
          this.authHttp.get('http://localhost:3000/api/place')
            .subscribe(
              (r) => console.log(r),
              (err) => console.log(err)
            )
        },
        (err) => {
          err = err.json();
          if (err.code === 'signin:notfound') this.userNotExists = true;
          console.log(err)
        },
        () => console.log('complete')
      )
  }
}