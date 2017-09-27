import { Observable } from 'rxjs/Observable';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import 'rxjs/add/operator/let';

import { AppState, AppReducers, AppActions } from './reducers';

export { AppState } from './reducers';
const actions = AppActions;
const reducers = AppReducers;

@NgModule({
  imports: [
    StoreModule.provideStore(reducers)
  ],
  declarations: [],
  exports: [],
  providers: [ ...actions ]
})
export class CoreStoreModule {};
