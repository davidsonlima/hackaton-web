import { Component } from '@angular/core';

import { ONG_MENU_ITEMS } from './pages.menu.ong';
import { RESTAURANT_MENU_ITEMS } from './pages.menu.restaurant';
import { MENU_ITEMS } from './pages-menu';
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
  
  menu = MENU_ITEMS

  constructor(private userService : UserService) {  }

  ngOnInit(): void {
    console.log("AAAAA")
    var user = new User();
    user.ongName = "ong foo";
    if(user && user.isOngUser()) {
      this.menu = ONG_MENU_ITEMS
    } else {
      this.menu = RESTAURANT_MENU_ITEMS
    }
    console.log("BBBB")
  };
}
