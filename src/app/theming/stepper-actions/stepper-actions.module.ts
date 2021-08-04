import { ReactiveFormsModule } from '@angular/forms';
import { StepperActionsComponent } from './stepper-actions.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  declarations: [StepperActionsComponent],
  exports: [StepperActionsComponent, FormsModule, ReactiveFormsModule, CommonModule],
})

export class StepperActionsModule { }
