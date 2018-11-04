import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [{
  path: 'login',
  component: LoginComponent,
}];

@NgModule({
  imports: [
    FormsModule,RouterModule.forChild(routes)],
  exports: [
    FormsModule, ReactiveFormsModule, RouterModule],
})
export class LoginRoutingModule { }

export const routedComponents = [
  LoginComponent,
];
