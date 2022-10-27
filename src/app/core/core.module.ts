import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './navbar/header/header.component';
import { NgDynamicBreadcrumbModule } from 'ng-dynamic-breadcrumb';
import { RouterModule } from '@angular/router';
import { DataTransferService } from '../company/service/data-transfer.service';
import { LoginComponent } from './Authentication/login/login.component';
import { RegistrationComponent } from './Authentication/registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Authentication/user.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    RegistrationComponent
  ],
  imports: [
    CommonModule,
    NgDynamicBreadcrumbModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    HeaderComponent,
  ],
  providers: [UserService ]
})
export class CoreModule { }
