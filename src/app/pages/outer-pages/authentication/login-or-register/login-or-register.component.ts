import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-or-register',
  templateUrl: './login-or-register.component.html',
  styleUrls: ['./login-or-register.component.scss']
})
export class LoginOrRegisterComponent {

  constructor(private router: Router) { }

  go_to_page(page: string) {
    this.router.navigate([page]);
  }

}
