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

  { path: 'landing', loadChildren: () => import('./pages/inner-pages/landing/landing.module').then(m => m.LandingModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },
  { path: 'my-products', loadChildren: () => import('./pages/inner-pages/my-products/my-products.module').then(m => m.MyProductsModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },
  { path: 'my-account', loadChildren: () => import('./pages/inner-pages/my-account/my-account.module').then(m => m.MyAccountModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },

  { path: 'factory', loadChildren: () => import('./pages/inner-pages/factory/factory.module').then(m => m.FactoryModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },
  { path: 'products', loadChildren: () => import('./pages/inner-pages/products/products.module').then(m => m.ProductsModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },
  { path: 'import-and-export-company', loadChildren: () => import('./pages/inner-pages/import-and-export-company/import-and-export-company.module').then(m => m.ImportAndExportCompanyModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },
  { path: 'others-manufacturing-company', loadChildren: () => import('./pages/inner-pages/others-manufacturing-company/others-manufacturing-company.module').then(m => m.OthersManufacturingCompanyModule), canActivate: [PathGuardService], data: { roles: ['LOGGED_IN'] } },

  { path: '', redirectTo: 'login-or-register', pathMatch: 'full' },
  { path: '**', redirectTo: 'login-or-register', },
];

const config: ExtraOptions = { useHash: true };

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
