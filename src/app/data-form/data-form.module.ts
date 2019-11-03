import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DataFormComponent } from './data-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    DataFormComponent,

  ],
  imports: [
    SharedModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,HttpClientModule
  ]
})
export class DataFormModule { }
