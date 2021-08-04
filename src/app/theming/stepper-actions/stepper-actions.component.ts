import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-stepper-actions',
  templateUrl: './stepper-actions.component.html',
  styleUrls: ['./stepper-actions.component.scss']
})
export class StepperActionsComponent {

  @Input() current_step: number = 1;
  @Output() go_to_next_step: EventEmitter<any> = new EventEmitter();

  constructor() { }

  go_to_next_step_event() {
    this.go_to_next_step.emit();
  }
}