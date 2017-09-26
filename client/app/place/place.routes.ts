import { Routes } from '@angular/router';

import { MyPlacesComponent } from './components/my-places/my-places.component';
import { AuthenticationGuardService } from '../shared/authentication/services/authentication-guard.service';

export const routes:Routes = [
  { path: 'front/my-places', component: MyPlacesComponent, canActivate: [AuthenticationGuardService] },
];

export const navigatableComponents = [
  MyPlacesComponent
];