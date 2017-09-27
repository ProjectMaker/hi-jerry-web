import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';

@Injectable()
export class AccountActions {
  static SIGNIN = '[Account] SIGNIN';
  static LOGOUT = '[Account] LOGOUT'
  signin(account:any): Action {
    return {
      type: AccountActions.SIGNIN,
      payload: {
        profile: {
          firstname: account.firstname,
          lastname: account.lastname
        },
      }
    };
  }

  logout():Action {
    return {
      type: AccountActions.LOGOUT
    }
  }
};
