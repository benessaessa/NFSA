import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent {

  @Input() message_1: any = null;
  @Input() message_2: any = null;
  @Input() message_3: any = null;
  @Output() button_clicked: EventEmitter<any> = new EventEmitter();

  constructor() { }

  button_clicked_event() {
    this.button_clicked.emit();
  }

}
