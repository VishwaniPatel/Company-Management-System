import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from '../company.model';

@Injectable()
export class DataTransferService {

  public communicationData:Subject<company>;
  public BreadCrumbData: Subject<string>;
  constructor() {
    this.communicationData = new Subject();
    this.BreadCrumbData = new Subject();
  }
  
  getData(company: company) {
    this.communicationData.next(company);
  }
  setCompanyName(companyName:string){
    this.BreadCrumbData.next(companyName);
  }
}
