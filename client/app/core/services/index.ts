import { AuthHttp, AuthConfig } from 'angular2-jwt';
import { Http, RequestOptions } from '@angular/http';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { SocialFacebookService } from './social/social-facebook.service';

export * from './auth/auth.service';
export * from './auth/auth-guard.service';
export * from './social/social-facebook.service';

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


export const APP_SERVICES = [
  AuthService,
  AuthGuardService,
  SocialFacebookService,
  {
    provide: AuthHttp,
    useFactory: authHttpServiceFactory,
    deps: [Http, RequestOptions]
  }
];