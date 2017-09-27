import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { JwtHelper } from 'angular2-jwt';

import { SocialFacebookService } from '../../social/services/social-facebook.service';

const API_URL = 'http://localhost:8080/user/auth';

@Injectable()
export class AuthenticationService {
  private token:string;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private http:Http, private fb:SocialFacebookService) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.token = currentUser && currentUser.token;
  }

  public loggedIn() {
    return this.token && !this.jwtHelper.isTokenExpired(this.token);
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this.token = null;
    this.fb.logout();
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
          localStorage.setItem('currentUser', JSON.stringify({ email: account.email, token: this.token }));
          return true;
        } else return false;
      })
      .catch((err:Response) => this.handleErrors(err))
  }

  handleErrors(error: Response) {
    return Observable.throw(error);
  }
}