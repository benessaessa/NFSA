import { Component } from '@angular/core';
import { AppVariables } from './app.variables';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nfsa';

  constructor(private appVariables: AppVariables) {
    this.appVariables.set_authorization_token(localStorage.getItem(environment.application_name + '-' + 'authorization_token'));
  }
}
