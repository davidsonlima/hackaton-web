import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileGuardService {

  constructor(private router : Router,
    private userService : UserService) {

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    var user = this.userService.getLoggedUser();
    if (user.isOngUser()) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
