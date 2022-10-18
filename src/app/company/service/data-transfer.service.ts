import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from '../company.model';

@Injectable()
export class DataTransferService {

  public communicationData:Subject<company>;
  constructor() {
    this.communicationData = new Subject();
  }

  getData(company: company) {
    this.communicationData.next(company);
  }
}
