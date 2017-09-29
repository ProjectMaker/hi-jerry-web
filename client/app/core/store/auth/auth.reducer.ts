import { Action } from '@ngrx/store';
import { AuthActions } from './auth.actions';

export interface IAuth {
  authentication: boolean;
  token: string;
};

const initialAccountState: IAuth = {
  authentication: false,
  token: ''
};

export function auth(state = initialAccountState, action: Action): IAuth {
  switch (action.type) {
    case AuthActions.SIGNIN:
      return Object.assign({}, state, { token: action.payload, authentication: true });
    case AuthActions.LOGOUT:
      return Object.assign({}, { authentication: false, token: '' });
    default:
      return state;
  }
};