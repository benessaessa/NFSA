import { NgModule } from '@angular/core';
import { ExtraOptions, RouterModule, Routes } from '@angular/router';
import { LoginOrRegisterComponent } from './pages/outer-pages/authentication/login-or-register/login-or-register.component';
import { PathGuardService } from './services/path-guard-service';

const routes: Routes = [
  { path: 'login-or-register', component: LoginOrRegisterComponent, canActivate: [PathGuardService], data: { roles: ['NOT_LOGGED_IN'] } },
  { path: 'login', loadChildren: () => import('./pages/outer-pages/authentication/login/login.module').then(m => m.LoginModule), canActivate: [PathGuardService], data: { roles: ['NOT_LOGGED_IN'] } },
  { path: 'register', loadChildren: () => import('./pages/outer-pages/authentication/register/register.module').then(m => m.RegisterModule), canActivate: [PathGuardService], data: { roles: ['NOT_LOGGED_IN'] } },
  { path: 'request-reset-password', loadChildren: () => import('./pages/outer-pages/authentication/request-reset-password/request-reset-password.module').then(m => m.RequestResetPasswordModule), canActivate: [PathGuardService], data: { roles: ['NOT_LOGGED_IN'] } },
  { path: 'reset-password', loadChildren: () => import('./pages/outer-pages/authentication/reset-password/reset-password.module').then(m => m.ResetPasswordModule), canActivate: [PathGuardService], data: { roles: ['NOT_LOGGED_IN'] } },
  { path: '', redirectTo: 'login-or-register', pathMatch: 'full' },
  { path: '**', redirectTo: 'login-or-register', }
];

const config: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
