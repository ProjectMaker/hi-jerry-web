import { Component, OnInit } from '@angular/core';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthenticationService } from '../../../shared/authentication/services/authentication.service';

@Component({
  selector: 'kl-unauthorized',
  templateUrl: './unauthorized.html'
})
export class UnauthorizedComponent { }