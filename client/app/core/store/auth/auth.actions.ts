import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AuthActions {
  static SIGNIN = '[Auth] SIGNIN';
  static LOGOUT = '[Auth] LOGOUT'

  signin(token:string): Action {
    return {
      type: AuthActions.SIGNIN,
      payload: token
    };
  }

  logout():Action {
    return {
      type: AuthActions.LOGOUT
    }
  }
};
