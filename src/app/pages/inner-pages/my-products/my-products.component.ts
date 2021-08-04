import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-products',
  templateUrl: './my-products.component.html',
  styleUrls: ['./my-products.component.scss']
})
export class MyProductsComponent {

  constructor(private router: Router) { }

  go_to_page(page: string) {
    this.router.navigate([page]);
  }

}
