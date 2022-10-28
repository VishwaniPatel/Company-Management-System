import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/Authentication/login/login.component';
import { RegistrationComponent } from './core/Authentication/registration/registration.component';
import { AuthGuardGuard } from './core/Guard/auth-guard.guard';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'company'
  },
  { path: 'company', loadChildren: () => import('./company/company.module').then(m => m.CompanyModule),
canActivate:[AuthGuardGuard] },
  {
    path: '**',
    component: PageNotFoundComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
