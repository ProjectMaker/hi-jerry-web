import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { CoreStoreModule } from './store';
import { SharedModule } from '../shared/shared.module';
import { APP_SERVICES } from './services';

import { NavComponent } from './components/nav/nav.component';

@NgModule({
  imports: [
    CoreStoreModule,
    HttpModule,
    SharedModule,
    RouterModule,
  ],
  declarations: [
    NavComponent
  ],
  exports: [
    CoreStoreModule,
    NavComponent
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {}
