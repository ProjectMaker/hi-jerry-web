import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

import '../assets/css/styles.css';
import { AuthenticationService } from './shared/authentication/services/authentication.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected showNav:boolean = false;

  public constructor(private auth:AuthenticationService, private router:Router) {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .subscribe((event:NavigationEnd) => {
        this.showNav = ['/front/account/signin','/front/account/register','/front/account/unauthorized'].indexOf(event.url) === -1;
      });
  }
  
  protected logout() {
    this.auth.logout();
    this.router.navigate(['/front/account/signin']);
  }
}