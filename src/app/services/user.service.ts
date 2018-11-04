import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) { 
    this.saveLoggedUser({
      ongName: "21312",
    } as User);
  }

  private readonly user_table = 'tab_user';

  public getLoggedUser(callback : any) : User {
    return JSON.parse(localStorage.getItem(this.user_table));
  }

  public saveLoggedUser(user : User) {
    var toSave = JSON.stringify(user);
    localStorage.setItem(this.user_table, toSave);
  }
}
