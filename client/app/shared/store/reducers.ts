import { IAccount, account, AccountActions } from './account';
import { IAuth, auth, AuthActions } from './auth';


export interface AppState {
  account: IAccount,
  auth: IAuth

};

export const AppReducers = {
  account,
  auth
};

export const AppActions = [
  AccountActions,
  AuthActions
];

