import { ReactiveFormsModule } from '@angular/forms';
import { ImportAndExportCompanyComponent } from './import-and-export-company.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StepperModule } from 'src/app/theming/stepper/stepper.module';

@NgModule({
  imports: [
    CommonModule, FormsModule, StepperModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ImportAndExportCompanyComponent
      }
    ])
  ],
  declarations: [ImportAndExportCompanyComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class ImportAndExportCompanyModule { }
