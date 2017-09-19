import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routes, navigatableComponents } from './account.routes';

import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    ...navigatableComponents
  ]/*,
  exports: [
    SigninComponent,
  ]*/
})
export class AccountModule { }