import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model/user';
import { UserType } from '../model/enumeration/user-type';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http : HttpClient) {
    // var user = new User();
    // user.fillFromJSON({
    //   name: "Ong Foo",
    //   userType: UserType.ONG,
    // });
    // this.saveLoggedUser(user);
  }

  private readonly user_table = 'tab_user';

  public getLoggedUser() : User {
    var parsed = JSON.parse(window.localStorage.getItem(this.user_table));
    if(parsed) {
      var user = new User();
      user.fillFromJSON(parsed);
      return user;
    }
    return null;
  }

  public saveLoggedUser(json : any) {
    window.localStorage.setItem(this.user_table, JSON.stringify(json));
  }
}
