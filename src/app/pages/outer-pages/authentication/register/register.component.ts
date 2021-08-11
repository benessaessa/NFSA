import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  inputs = [
    [null, null, null, null],
    [null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, '', null, null, null, null, null, null, null, null, null, null, null, null],
  ]

  constructor() { }
  check_view_label(form_index: number, input_index: number) {
    if (this.inputs[form_index][input_index] === null || this.inputs[form_index][input_index] === '') {
      return false;
    } else {
      return true;
    }
  }
  ngOnInit(): void {
  }

}
