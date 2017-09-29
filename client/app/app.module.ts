import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FacebookModule } from 'ngx-facebook';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';
import { APP_CONTAINER_MODULES } from './containers';


@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    FacebookModule.forRoot(),
    CoreModule,
    SharedModule,
    ...APP_CONTAINER_MODULES,
    RouterModule.forRoot([
      { path: 'front', redirectTo: 'front/my-places', pathMatch: 'full' },
    ])
  ],
  providers: [
    
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }