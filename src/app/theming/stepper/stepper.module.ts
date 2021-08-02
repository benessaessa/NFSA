import { ReactiveFormsModule } from '@angular/forms';
import { StepperComponent } from './stepper.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  declarations: [StepperComponent],
  exports: [StepperComponent, FormsModule, ReactiveFormsModule, CommonModule],
})

export class StepperModule { }
