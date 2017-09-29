import { Component, OnInit } from '@angular/core';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

import { AuthService } from '../../../core/services/auth/auth.service';

@Component({
  selector: 'kl-unauthorized',
  templateUrl: './unauthorized.html'
})
export class UnauthorizedComponent { }