import { ReactiveFormsModule } from '@angular/forms';
import { SuccessMessageComponent } from './success-message.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule,
    FormsModule, ReactiveFormsModule, CommonModule
  ],
  declarations: [SuccessMessageComponent],
  exports: [SuccessMessageComponent, FormsModule, ReactiveFormsModule, CommonModule],
})

export class SuccessMessageModule { }
