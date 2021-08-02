import { ReactiveFormsModule } from '@angular/forms';
import { MyProductsComponent } from './my-products.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: MyProductsComponent
      }
    ])
  ],
  declarations: [MyProductsComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class MyProductsModule { }
