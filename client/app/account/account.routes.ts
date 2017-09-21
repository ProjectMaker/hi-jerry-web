import { Routes } from '@angular/router';

import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { UnauthorizedComponent } from './components/unauthorized/unauthorized.component';

import { AuthenticationGuardService } from '../shared/authentication/services/authentication-guard.service';

export const routes:Routes = [
  { path: 'front/account/signin', component: SigninComponent },
  { path: 'front/account/register', component: RegisterComponent },
  { path: 'front/account/unauthorized', component: UnauthorizedComponent },
  { path: 'front/place', component: RegisterComponent, canActivate: [AuthenticationGuardService] },
  { path: 'front', component: SigninComponent }
];

export const navigatableComponents = [
  SigninComponent,
  RegisterComponent,
  UnauthorizedComponent
];