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

  check_view_sub_stepper(): boolean {
    let returned_value: boolean = false;

    if (window.location.hash.includes('factory')) {
      if (this.current_step === 3 || this.current_step === 4 || this.current_step === 5) {
        returned_value = true;
      }
    } else if (window.location.hash.includes('import-and-export-company') || window.location.hash.includes('others-manufacturing-company')) {
      if (this.current_step === 4 || this.current_step === 5) {
        returned_value = true;
      }
    }

    return returned_value;
  }
}
