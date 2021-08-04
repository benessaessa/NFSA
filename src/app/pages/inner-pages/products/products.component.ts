import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  current_step: number = 1;

  inputs = [
    [null, null, null, null, null, null],
    ['', null, null, null],
    ['', null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null, null, null, '', null],
    [null, null, null]
  ]

  view_another_1: boolean = false;
  view_another_2: boolean = false;
  view_another_3: boolean = false;
  view_another_4: boolean = false;

  constructor() { }

  change_step(step: number) {
    this.current_step = step;
  }

  check_view_label(form_index: number, input_index: number) {
    if (this.inputs[form_index][input_index] === null || this.inputs[form_index][input_index] === '') {
      return false;
    } else {
      return true;
    }
  }

  go_to_next_step(event: any) {
    this.current_step = this.current_step + 1;
  }

  select_file() {
    document.getElementById('form-5-file-input')?.click();
  }

  return_dropdown_width(): any {
    const div: any = document.getElementById("drobdown-div-id");
    return div.offsetWidth + 'px';
  }

}
