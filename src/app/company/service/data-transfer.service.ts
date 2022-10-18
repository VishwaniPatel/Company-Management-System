import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { company } from '../company.model';

@Injectable()
export class DataTransferService {

  // public CommunicationData$: Observable<company>;
  // private CommunicationData: Subject<company>;

  public communicationData:Subject<company>;
  constructor() {
    this.communicationData = new Subject();
    // this.CommunicationData = new Subject();
    // this.CommunicationData$ = this.CommunicationData.asObservable();
  }

  getData(company: company) {
    // this.CommunicationData.next(company);
    this.communicationData.next(company);
  }
}
