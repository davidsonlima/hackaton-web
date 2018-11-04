import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppHttpClientService } from '../../services/app-http-client.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm : ElementRef;

  private email : string;
  private password : string;

  constructor(private authService : AuthService) { }

  onSubmitLogin() {
    if(!this.email || !this.password) {
      console.log("Erro!")
    }
    this.authService.login(this.email, this.password, (response) => {
      console.log(response);
    });
  }

  ngOnInit() {

  }
}
