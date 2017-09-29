import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { CoreStoreModule } from './store';

import { APP_SERVICES } from './services';

@NgModule({
  imports: [
    CoreStoreModule,
    HttpModule,
  ],
  declarations: [
  ],
  exports: [
    CoreStoreModule,
  ],
  providers: [
    ...APP_SERVICES
  ]
})
export class CoreModule {}
