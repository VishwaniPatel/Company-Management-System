import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { RouterModule } from '@angular/router';
import { DataTransferService } from '../company/service/data-transfer.service';
import { LoginComponent } from './Authentication/login/login.component';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgDynamicBreadcrumbModule,
    RouterModule
  ],
  exports:[
    HeaderComponent,
  ],
})
export class CoreModule { }
