import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-message',
  templateUrl: './success-message.component.html',
  styleUrls: ['./success-message.component.scss']
})
export class SuccessMessageComponent implements OnInit {

  @Input() message_1: any = null;
  @Input() message_2: any = null;
  @Input() message_3: any = null;
  @Input() page_link: any = null;

  constructor() { }

  ngOnInit(): void {
  }

}
