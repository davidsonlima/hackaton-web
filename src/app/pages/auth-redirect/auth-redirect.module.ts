import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRedirectComponent } from './auth-redirect.component';
import { AuthRedirectRoutingModule } from './auth-redirect-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AuthRedirectRoutingModule,
  ],
  declarations: [
    AuthRedirectComponent,
  ],
  exports: [
    AuthRedirectComponent
  ]
})
export class AuthRedirectModule { }
