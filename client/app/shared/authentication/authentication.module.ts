import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { SocialModule } from '../social/social.module';
import { AuthenticationService } from './services/authentication.service';
import { AuthenticationGuardService } from './services/authentication-guard.service';
import { CoreStoreModule } from '../store'

const authHttpServiceFactory = (http: Http, options: RequestOptions) => {
  const config = {
    headerPrefix: 'JWT',
    tokenGetter: (() => {
      const currentUser = JSON.parse(localStorage.getItem('auth'));
      return currentUser.token;
    }),
    globalHeaders: [{'Content-Type':'application/json'}]
  };

  return new AuthHttp(new AuthConfig(config), http, options);
}

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    SocialModule,
    CoreStoreModule
  ],
  declarations: [

  ],
  providers: [
    AuthenticationService,
    AuthenticationGuardService,
    {
      provide: AuthHttp,
      useFactory: authHttpServiceFactory,
      deps: [Http, RequestOptions]
    }
  ]
})
export class AuthenticationModule { }