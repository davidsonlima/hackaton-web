import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenAuthenticationService {

  constructor() {
  }

  public getStoredToken() : string {
    //this.localStorage.getItem('user_token');
    return null;
  }

  public storeToken(token : string) {
    //this.localStorage.setItem('user_token', token)
  }
}
