import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm : ElementRef;

  private email : string;
  private password : string;

  constructor(private router : Router, private authService : AuthService, private userService : UserService) { }

  onSubmitLogin() {
    if(!this.email || !this.password) {
      console.log("Erro!");
    }
    this.authService.login(this.email, this.password, (response) => {
      console.log(response)
      this.userService.saveLoggedUser(response)
      this.router.navigate(['/pages/restaurants-map']);
    });
  }

  ngOnInit() {

  }
}
