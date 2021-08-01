import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register.component';
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
        component: RegisterComponent
      }
    ])
  ],
  declarations: [RegisterComponent],
  providers: [],
  exports: [CommonModule, ReactiveFormsModule]
})

export class RegisterModule { }
