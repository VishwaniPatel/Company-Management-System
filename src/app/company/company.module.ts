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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { DataTransferService } from './service/data-transfer.service';
import { EditCompanyDataResolver } from './edit-company-data.resolver';


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
    SharedModule,
    ReactiveFormsModule,
    NgSelectModule,
    FormsModule
  ],
  providers:[CompanyService,DataTransferService,EditCompanyDataResolver]
})
export class CompanyModule { }
