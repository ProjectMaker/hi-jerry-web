import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

import { routes, navigatableComponents } from './place.routes';

@NgModule({
  imports: [
    RouterModule,
    RouterModule.forRoot(routes),
    FormsModule,
    CommonModule,
    HttpModule
  ],
  declarations: [
    ...navigatableComponents
  ],
  providers: [

  ]
})
export class PlaceModule { }