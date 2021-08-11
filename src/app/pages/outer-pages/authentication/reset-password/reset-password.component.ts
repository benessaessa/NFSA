import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  inputs = [
    [null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null],
  ]

  constructor() { }

  ngOnInit(): void {
  }

  check_view_label(form_index: number, input_index: number) {
    if (this.inputs[form_index][input_index] === null || this.inputs[form_index][input_index] === '') {
      return false;
    } else {
      return true;
    }
  }

}
