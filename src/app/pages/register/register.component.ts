import { Component, OnInit } from '@angular/core';
import { UserType } from '../../model/enumeration/user-type';

@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  private userType : UserType;

  constructor() {
  }

  ngOnInit() {
    this.userType = UserType.ONG;
  }

}
