import { Injectable } from '@angular/core';
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { FacebookService, LoginResponse, AuthResponse } from 'ngx-facebook';

@Injectable()
export class SocialFacebookService {
  public constructor(private fb:FacebookService, private http:Http) {
    this.fb.init({
      appId: '160931807807827',
      status: true,
      cookie: true,
      xfbml: true,
      version: 'v2.4'
    });
  }

  public login() {
    const options:any = {
      scope: 'public_profile,user_friends,email',
      return_scopes: true,
      enable_profile_selector: true
    };

    return Observable.fromPromise(this.fb.getLoginStatus())
      .mergeMap((res:any) => {
        if (res.status === 'connected') {
          return this.retrieveProfile();
        } else {
          return Observable.fromPromise(this.fb.login(options))
            .map((res:LoginResponse) => res.authResponse)
            .mergeMap((res:AuthResponse) => {
              return this.retrieveProfile()
            })
        }
      });
  }

  public logout() {
    this.fb.logout()
      .then(() => console.log('log out'));
  }

  private retrieveProfile() {
    const authResponse:AuthResponse = this.fb.getAuthResponse();
    return Observable.fromPromise(this.fb.api(`me?fields=email,last_name,first_name&access_token=${authResponse.accessToken}`))
      .map((res:any) => {
        return {
          email: res.email,
          lastname: res.last_name,
          firstname: res.first_name,
          id: res.id,
          token: authResponse.accessToken
        };
      })
  }
}


