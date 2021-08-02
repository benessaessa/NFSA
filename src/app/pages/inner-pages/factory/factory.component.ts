import { Component } from '@angular/core';

@Component({
  selector: 'app-factory',
  templateUrl: './factory.component.html',
  styleUrls: ['./factory.component.scss']
})
export class FactoryComponent {

  current_step: number = 1;

  constructor() { }

  change_step(step: number) {
    this.current_step = step;
  }

}
