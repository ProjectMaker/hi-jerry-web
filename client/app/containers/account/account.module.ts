import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { SharedModule } from '../../shared/shared.module';

import { routes, navigatableComponents } from './account.routes';

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    HttpModule,
    SharedModule
  ],
  declarations: [
    ...navigatableComponents
  ],
  providers: [
    
  ]

  /*,
  exports: [
    SigninComponent,
  ]*/
})
export class AccountModule { }