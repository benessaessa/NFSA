import { ReactiveFormsModule } from '@angular/forms';
import { MyAccountComponent } from './my-account.component';
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
        component: MyAccountComponent
      }
    ])
  ],
  declarations: [MyAccountComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class MyAccountModule { }
