import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRedirectComponent } from './auth-redirect.component';

const routes: Routes = [{
  path: 'rdr',
  component: AuthRedirectComponent,
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRedirectRoutingModule { }

export const routedComponents = [
  AuthRedirectComponent,
];
