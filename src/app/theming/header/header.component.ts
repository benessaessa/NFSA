import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppVariables } from 'src/app/app.variables';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(public appVariables: AppVariables, private router: Router) { }

  ngOnInit(): void {
  }

  log_out() {
    localStorage.removeItem(environment.application_name + '-' + 'authorization_token');
    this.appVariables.set_authorization_token(null);

    setTimeout(() => {
      this.router.navigate(['/login-or-register']);
    }, 1000);
  }

  check_on_page(page: string) {
    return window.location.hash.includes(page);
  }

}
