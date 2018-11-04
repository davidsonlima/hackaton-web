import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { bindCallback } from 'rxjs';
import { AppHttpClientService } from './app-http-client.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : AppHttpClientService) { 
  }

  public login(email : string, password : string, callback : any) : any {
    this.http.post("auth/login", {
      email,
      password,
    }, callback);
  }
}
