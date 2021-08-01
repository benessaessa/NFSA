import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginOrRegisterComponent } from './pages/outer-pages/authentication/login-or-register/login-or-register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginOrRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
