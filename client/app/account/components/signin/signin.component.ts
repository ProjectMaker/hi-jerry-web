import { Component, OnInit } from '@angular/core';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'kl-signin',
  templateUrl: './signin.html'
})
export class SigninComponent implements OnInit {
  protected userNotExists:boolean = false;
  public constructor(private userService:UserService) { }

  public ngOnInit() {
    console.log('LoginComponent init');
  }

  protected signin(value:any) {
    console.log('SIGNIN')
    this.userService.signin(value)
      .subscribe(
        (r) => console.log(r),
        (err) => {
          err = err.json();
          if (err.code === 'signin:notfound') this.userNotExists = true;
          console.log(err)
        },
        () => console.log('complete')
      )
  }
}