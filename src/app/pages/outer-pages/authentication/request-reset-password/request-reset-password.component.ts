import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss']
})
export class RequestResetPasswordComponent {

  inputs = [
    [null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null],
  ]

  view_success: boolean = false;

  message_1: string = 'تم إرسال الرابط إلي بريدك الإلكتروني بنجاح !';
  message_2: any = 'تفحص بريدك الإلكتروني الآن لإستعادة كلمة مرورك';
  message_3: any = 'العودة إلي تسجيل الدخول';

  constructor(private router: Router) { }

  request_reset_password() {
    this.view_success = true;
  }

  button_clicked(event: any) {
    this.router.navigate(['login'])
  }

  check_view_label(form_index: number, input_index: number) {
    if (this.inputs[form_index][input_index] === null || this.inputs[form_index][input_index] === '') {
      return false;
    } else {
      return true;
    }
  }

}
