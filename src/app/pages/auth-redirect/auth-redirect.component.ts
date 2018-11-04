import { Component, OnInit } from '@angular/core';
import { TokenAuthenticationService } from '../../services/token-authentication.service';

@Component({
  selector: 'ngx-auth-redirect',
  templateUrl: './auth-redirect.component.html',
  styleUrls: ['./auth-redirect.component.scss']
})
export class AuthRedirectComponent implements OnInit {

  constructor(private tokenAuthService : TokenAuthenticationService) { }
  
  ngOnInit() {

  }
}