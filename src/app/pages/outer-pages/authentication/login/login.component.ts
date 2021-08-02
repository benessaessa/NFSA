import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppVariables } from 'src/app/app.variables';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private appVariables: AppVariables) { }

  ngOnInit(): void {
  }

  login() {
    localStorage.setItem(environment.application_name + '-' + 'authorization_token', 'test_token');
    this.appVariables.set_authorization_token('test_token');

    setTimeout(() => { this.router.navigate(['/landing']); }, 1000);
  }

}
