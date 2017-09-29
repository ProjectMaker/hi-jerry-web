import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Store } from '@ngrx/store';
import 'rxjs/add/operator/let';

import { AuthService } from '../../services/auth/auth.service';
import { AppState } from '../../store';
import { getIsUserSignedIn$ } from '../../store/auth/auth.selectors';

@Component({
  selector: 'kl-nav',
  templateUrl: './nav.html',
})
export class NavComponent {
  protected isSignedIn$ = this.store.let(getIsUserSignedIn$);

  public constructor(private auth:AuthService, private router:Router, private store:Store<AppState>) { }

  protected logout() {
    this.auth.logout();
    this.router.navigate(['/front/account/signin']);
  }
}