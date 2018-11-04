import { Component } from '@angular/core';

import { ONG_MENU_ITEMS } from './pages.menu.ong';
import { RESTAURANT_MENU_ITEMS } from './pages.menu.restaurant';
import { UserService } from '../services/user.service';
import { User } from '../model/user';
import { NbMenuItem } from '@nebular/theme';

@Component({
  selector: 'ngx-pages',
  template: `
    <ngx-sample-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-sample-layout>
  `,
})
export class PagesComponent {
  
  private menu : NbMenuItem[];


  constructor(private userService : UserService) {
    this.userService.getLoggedUser((u) => {
      var user = u as User;
      if(user.isOngUser()) {
        this.menu = ONG_MENU_ITEMS
      } else {
        this.menu = RESTAURANT_MENU_ITEMS
      }
    })
  }
}
