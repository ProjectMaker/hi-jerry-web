import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service';

@Component({
  selector: 'kl-register',
  templateUrl: './register.html'
})
export class RegisterComponent implements OnInit {
  protected userExists:boolean = false;
  public constructor(private authenticationServiceService:AuthenticationService, private router:Router) { }
  public ngOnInit() {
    console.log('RegisterComponent init');
  }

  protected register(value:any) {
    console.log('Register', value);
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
}