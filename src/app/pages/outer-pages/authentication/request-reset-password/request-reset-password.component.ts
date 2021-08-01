import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent implements OnInit {

  view_success: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  request_reset_password() {
    this.view_success = true;
  }

}
