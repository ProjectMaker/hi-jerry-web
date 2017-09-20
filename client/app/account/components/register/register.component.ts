import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../shared/user.service';

@Component({
  selector: 'kl-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  protected userExists:boolean = false;
  public constructor(private userService:UserService, private router:Router) { }
  public ngOnInit() {
    console.log('RegisterComponent init');
  }

  protected register(value:any) {
    console.log('Register', value);
    this.userService.register(value)
      .subscribe(
        (r) => this.router.navigate(['/front/account/signin']),
        (err) => {
          err = err.json();
          if (err.code === 'register:exists') this.userExists = true;
        },
        () => console.log('complete')
      )
  }
}