import { ReactiveFormsModule } from '@angular/forms';
import { RequestResetPasswordComponent } from './request-reset-password.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SuccessMessageModule } from 'src/app/theming/success-message/success-message.module';

@NgModule({
  imports: [
    CommonModule, FormsModule,
    ReactiveFormsModule, SuccessMessageModule,
    RouterModule.forChild([
      {
        path: '',
        component: RequestResetPasswordComponent
      }
    ])
  ],
  declarations: [RequestResetPasswordComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class RequestResetPasswordModule { }
