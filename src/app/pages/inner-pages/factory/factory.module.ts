import { ReactiveFormsModule } from '@angular/forms';
import { FactoryComponent } from './factory.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { StepperModule } from 'src/app/theming/stepper/stepper.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule, StepperModule,
    RouterModule.forChild([
      {
        path: '',
        component: FactoryComponent
      }
    ])
  ],
  declarations: [FactoryComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class FactoryModule { }
