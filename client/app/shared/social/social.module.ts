import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule,Http, RequestOptions } from '@angular/http';

import { SocialFacebookService } from './services/social-facebook.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  declarations: [

  ],
  providers: [
    SocialFacebookService,
  ]
})
export class SocialModule { }