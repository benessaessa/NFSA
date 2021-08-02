import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginOrRegisterComponent } from './pages/outer-pages/authentication/login-or-register/login-or-register.component';
import { HeaderComponent } from './theming/header/header.component';
import { FooterComponent } from './theming/footer/footer.component';
import { ProductsComponent } from './pages/inner-pages/products/products.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginOrRegisterComponent,
    HeaderComponent, FooterComponent, ProductsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
