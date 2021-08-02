import { ReactiveFormsModule } from '@angular/forms';
import { ProductsComponent } from './products.component';
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
        component: ProductsComponent
      }
    ])
  ],
  declarations: [ProductsComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class ProductsModule { }
