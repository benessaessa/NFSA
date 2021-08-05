import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, OnDestroy {

  view_success: boolean = false;

  message_1: string = 'ﺗﻢ ارسال اﻟﻄﻠﺐ ﺑﻨﺠﺎح!';
  message_2: any = 'ﺳﻮف ﻳﺘﻢ اﻟﺘﻮاﺻﻞ ﻣﻌﻜﻢ ﻓﻲ اﻗﺮب وﻗﺖ ﻣﻤﻜﻦ.';
  message_3: any = 'اﻟﻌﻮدﺔ إﻟﻲ اﻟﺼﻔﺤﺔ اﻟﺮﺋﻴﺴﻴﺔ';

  view_back_drop: boolean = false;

  tooltip_1: any;

  constructor(private router: Router) {


  }

  ngOnInit(): void {
    setTimeout(() => {
      var exampleEl = document.getElementById('tooltip-1')
      this.tooltip_1 = new bootstrap.Tooltip(exampleEl, { boundary: document.body });
    }, 1000);
  }

  ngOnDestroy() {
    this.tooltip_1.hide();
  }

  go_to_page(page: string) {
    this.router.navigate([page]);
  }

  button_clicked(event: any) {
    this.view_success = false;
  }

  view_back_drop_action() {
    this.view_back_drop = true;
    this.tooltip_1.show();
  }

}
