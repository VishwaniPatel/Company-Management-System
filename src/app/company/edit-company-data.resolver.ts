import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { company } from './company.model';
import { CompanyService } from './service/company.service';

@Injectable()
export class EditCompanyDataResolver implements Resolve<company> {
  constructor(private companyService: CompanyService) {}
  resolve(route: ActivatedRouteSnapshot): Observable<company> {
    return this.companyService.getCompanyById(route.params['company_id']);
  }
}
