import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppHttpClientService } from '../../services/app-http-client.service';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm : ElementRef;

  private username : string;
  private password : string;

  constructor(private http : AppHttpClientService) { }

  onSubmitForm() {
    if(!this.username || !this.password) {
      //this.http.post();
    }
  }

  ngOnInit() {

  }
}
