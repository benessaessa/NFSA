import { Component } from '@angular/core';

@Component({
  selector: 'app-others-manufacturing-company',
  templateUrl: './others-manufacturing-company.component.html',
  styleUrls: ['./others-manufacturing-company.component.scss']
})
export class OthersManufacturingCompanyComponent {

  current_step: number = 1;

  constructor() { }

  change_step(step: number) {
    this.current_step = step;
  }

}
