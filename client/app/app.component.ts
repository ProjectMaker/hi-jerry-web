import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import '../assets/css/styles.css';
import { AuthenticationService } from './shared/authentication/services/authentication.service';
import { AppState } from './shared/store';
import { getIsUserSignedIn$ } from './shared/store/account/account.selectors';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  protected isSignedIn$ = this.store.let(getIsUserSignedIn$);

  public constructor(private auth:AuthenticationService, private router:Router, private store:Store<AppState>) { }
  
  protected logout() {
    this.auth.logout();
    this.router.navigate(['/front/account/signin']);
  }
}