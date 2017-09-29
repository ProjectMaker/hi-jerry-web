import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FacebookModule } from 'ngx-facebook';

import { AccountModule } from './account/account.module';
import { PlaceModule } from './place/place.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    FormsModule,
    FacebookModule.forRoot(),
    AccountModule,
    PlaceModule,
    CoreModule,
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