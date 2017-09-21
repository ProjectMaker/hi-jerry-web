import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule }  from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AccountModule } from './account/account.module';
import { AuthenticationModule } from './shared/authentication/authentication.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    RouterModule,
    NgbModule.forRoot(),
    FormsModule,
    AuthenticationModule,

    AccountModule
  ],
  providers: [
    
  ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }