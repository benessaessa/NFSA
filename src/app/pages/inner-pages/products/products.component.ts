import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent {

  current_step: number = 1;

  constructor() { }

  change_step(step: number) {
    this.current_step = step;
  }

}
