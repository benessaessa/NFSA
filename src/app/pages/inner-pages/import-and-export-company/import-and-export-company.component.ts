import { Component } from '@angular/core';

@Component({
  selector: 'app-import-and-export-company',
  templateUrl: './import-and-export-company.component.html',
  styleUrls: ['./import-and-export-company.component.scss']
})
export class ImportAndExportCompanyComponent {

  current_step: number = 1;

  constructor() { }

  change_step(step: number) {
    this.current_step = step;
  }

}
