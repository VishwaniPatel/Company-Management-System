import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    NgDynamicBreadcrumbModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
    
  ]
})
export class CoreModule { }
