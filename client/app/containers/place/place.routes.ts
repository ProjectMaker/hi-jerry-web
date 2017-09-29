import { Routes } from '@angular/router';

import { MyPlacesComponent } from './components/my-places/my-places.component';
import { AuthGuardService } from '../../core/services/auth/auth-guard.service';

export const routes:Routes = [
  { path: 'front/my-places', component: MyPlacesComponent, canActivate: [AuthGuardService] },
];

export const navigatableComponents = [
  MyPlacesComponent
];