import { DropdownService } from './services/dropdown.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CampoControlErroComponent } from './campo-control-erro/campo-control-erro.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormDebugComponent } from './form-debug/form-debug.component';
import { ErrorMsgComponent } from './error-msg/error-msg.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent
  ],
  providers: [DropdownService]
})
export class SharedModule { }
