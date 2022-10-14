import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameLogoPipe } from './pipes/name-logo.pipe';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    NameLogoPipe,
    FilterPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [NameLogoPipe,FilterPipe]
})
export class SharedModule { }
