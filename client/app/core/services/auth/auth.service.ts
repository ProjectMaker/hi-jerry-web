import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { JwtHelper } from 'angular2-jwt';
import { Store } from '@ngrx/store';

import { SocialFacebookService } from '../social/social-facebook.service';
import { AppState } from '../../store';
import { AuthActions } from '../../store/auth/auth.actions';
import { getToken$ } from '../../store/auth/auth.selectors';

const API_URL = 'http://localhost:8080/user/auth';

@Injectable()
export class AuthService {
  private token:string;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http:Http,
              private fb:SocialFacebookService,
              private authActions:AuthActions,
              private store:Store<AppState>) {

    this.store.let(getToken$)
      .subscribe(
        (token) => this.token = token,
        (err) => console.log(err)
      );
  }

  public loggedIn() {
    return this.token && !this.jwtHelper.isTokenExpired(this.token);
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.token = null;
    this.fb.logout();
    this.store.dispatch(this.authActions.logout())
  }

  public register(account:any) {
    return this.http.post(`${API_URL}/register`, account)
      .map((res:Response) => res.json())
      .catch((err:Response) => this.handleErrors(err))
  }

  public signin(type:string, account:any) {
    return this.http.post(`${API_URL}/signin/${type}`, account)
      .map((response:Response) => {
        const token = response.json() && response.json().token;
        if (token) {
          this.token = token;
          this.store.dispatch(this.authActions.signin(token));
          return true;
        } else return false;
      })
      .catch((err:Response) => this.handleErrors(err))
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}