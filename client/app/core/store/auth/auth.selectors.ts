import { Observable } from 'rxjs/Observable';
import '@ngrx/core/add/operator/select';
import { AppState } from '../reducers';


export function getIsUserSignedIn$(state$: Observable<AppState>):Observable<boolean> {
  return state$.select(state => {
    return state.auth.authentication;
  });
};

export function getToken$(state$: Observable<AppState>):Observable<string> {
  return state$.select(state => {
    return state.auth.token;
  });
};