import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { StoreModule, ActionReducer, combineReducers } from '@ngrx/store';
import { compose } from '@ngrx/core/compose';
import 'rxjs/add/operator/let';
import { localStorageSync } from 'ngrx-store-localstorage';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppState, AppReducers, AppActions } from './reducers';

export { AppState } from './reducers';
const actions = AppActions;

const reducers = compose(localStorageSync({ keys: ['auth'], rehydrate: true }), combineReducers)(AppReducers);
// This is required for AOT
export function appReducer(state: any, action: any) {
  return reducers(state, action);
}

@NgModule({
  imports: [
    StoreModule.provideStore(appReducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  declarations: [],
  exports: [],
  providers: [ ...actions ]
})
export class CoreStoreModule {};
