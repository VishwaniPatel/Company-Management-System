import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyListComponent } from './company-list/company-list.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { HttpClientModule } from '@angular/common/http';
import { CompanyService } from './service/company.service';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CompanyComponent,
    CompanyFormComponent,
    CompanyListComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    NgDynamicBreadcrumbModule,
    HttpClientModule,
    SharedModule
  ],
  providers:[CompanyService]
})
export class CompanyModule { }
