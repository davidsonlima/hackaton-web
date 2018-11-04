import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ThemeModule } from '../../@theme/theme.module';
import { NbAuthModule } from '@nebular/auth';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ThemeModule,
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [LoginComponent],
})
export class LoginModule { 

}
