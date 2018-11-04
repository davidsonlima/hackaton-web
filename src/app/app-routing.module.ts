import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent,
} from '@nebular/auth';
import { AuthRedirectComponent } from './pages/auth-redirect/auth-redirect.component';
import { AuthRedirectModule } from './pages/auth-redirect/auth-redirect.module';
import { AuthGuardService } from './services/auth-guard.service';
import { LoginModule } from './pages/login/login.module';
import { RegisterModule } from './pages/register/register.module';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'auth',
    component: NbAuthComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'register',
        component: NbRegisterComponent,
      },
      {
        path: 'logout',
        component: NbLogoutComponent,
      },
      {
        path: 'request-password',
        component: NbRequestPasswordComponent,
      },
      {
        path: 'reset-password',
        component: NbResetPasswordComponent,
      },
    ],
  },
  { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule', canActivate: [AuthGuardService] },
  { path: '', redirectTo: 'pages', pathMatch: 'full', canActivate: [AuthGuardService] },
  { path: '**', redirectTo: 'pages', canActivate: [AuthGuardService] },
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    LoginModule,
    RegisterModule,
    RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [
    AuthGuardService,
  ]
})
export class AppRoutingModule {
}
