import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  view_success: boolean = false;

  message_1: string = 'ﺗﻢ ارسال اﻟﻄﻠﺐ ﺑﻨﺠﺎح!';
  message_2: any = 'ﺳﻮف ﻳﺘﻢ اﻟﺘﻮاﺻﻞ ﻣﻌﻜﻢ ﻓﻲ اﻗﺮب وﻗﺖ ﻣﻤﻜﻦ.';
  message_3: any = 'اﻟﻌﻮدﺔ إﻟﻲ اﻟﺼﻔﺤﺔ اﻟﺮﺋﻴﺴﻴﺔ';

  constructor(private router: Router) { }

  ngOnInit(): void { }

  go_to_page(page: string) {
    this.router.navigate([page]);
  }

  button_clicked(event: any) {
    this.view_success = false;
  }

}
