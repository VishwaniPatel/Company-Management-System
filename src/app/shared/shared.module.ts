import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './pipes/name-logo.pipe';



@NgModule({
  declarations: [
    NameLogoPipe
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
