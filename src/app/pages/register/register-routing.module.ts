import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    CommonModule,
    RegisterRoutingModule,
  ],
  declarations: [
    RegisterComponent,
  ],
  exports: [
    RegisterComponent,
  ]
})
export class RegisterRoutingModule { }