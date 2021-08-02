import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss']
})
export class StepperComponent {

  @Input() current_step: number = 1;
  @Input() image: string = '';
  @Input() title: string = '';

  @Output() change_step: EventEmitter<any> = new EventEmitter();

  constructor() { }


  change_step_event(step: number) {
    this.change_step.emit(step);
  }
}
