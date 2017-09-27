import { IAccount, account, AccountActions } from './account';

export interface AppState {
  account: IAccount;
};

export const AppReducers = {
  account
};

export const AppActions = [
  AccountActions
]