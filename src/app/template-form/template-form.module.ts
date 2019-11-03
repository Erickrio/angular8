import { SharedModule } from './../shared/shared.module';

import { FormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';





@NgModule({
  declarations: [
    TemplateFormComponent,


  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    SharedModule
    ],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class TemplateFormModule { }
