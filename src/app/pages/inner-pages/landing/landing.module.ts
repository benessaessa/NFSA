import { ReactiveFormsModule } from '@angular/forms';
import { LandingComponent } from './landing.component';
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
        component: LandingComponent
      }
    ])
  ],
  declarations: [LandingComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class LandingModule { }
