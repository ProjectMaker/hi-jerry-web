import { Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';

export const routes:Routes = [
  { path: 'front/account/signin', component: SigninComponent },
  { path: 'front/account/register', component: RegisterComponent },
  { path: 'front', component: SigninComponent }
];

export const navigatableComponents = [
  SigninComponent,
  RegisterComponent
];