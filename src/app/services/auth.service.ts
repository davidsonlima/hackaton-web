import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { 
  }

  public login(username : string, password : string) : any {
    this.http.post("/auth/login", {
      username,
      password,
    });
  }
}
