import { Action } from '@ngrx/store';
import { AccountActions } from './account.actions';

export interface IAccount {
  authentication: boolean;
  profile: {};
};

const initialAccountState: IAccount = {
  authentication: false,
  profile: { }
};

export function account(state = initialAccountState, action: Action): IAccount {
  switch (action.type) {
    case AccountActions.SIGNIN:
      return Object.assign({}, state, { profile: action.payload, authentication: true });
    case AccountActions.LOGOUT:
      return Object.assign({}, state, { authentication: false });
    default:
      return state;
  }
};