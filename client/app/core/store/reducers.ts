import { IAuth, auth, AuthActions } from './auth';


export interface AppState {
  auth: IAuth
};

export const AppReducers = {
  auth
};

export const AppActions = [
  AuthActions
];

