import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent implements OnInit {

  view_success: boolean = false;

  message_1: string = 'تم إرسال الرابط إلي بريدك الإلكتروني بنجاح !';
  message_2: any = 'تفحص بريدك الإلكتروني الآن لإستعادة كلمة مرورك';
  message_3: any = 'العودة إلي تسجيل الدخول';
  page_link: any = '/login';

  constructor() { }

  ngOnInit(): void {
  }

  request_reset_password() {
    this.view_success = true;
  }

}
