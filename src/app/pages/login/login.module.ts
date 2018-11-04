import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

@NgModule({
  imports: [
    CommonModule,
    LoginRoutingModule,
    ThemeModule
  ],
  declarations: [
    LoginComponent,
  ],
  exports: [LoginComponent],
})
export class LoginModule { 

}
