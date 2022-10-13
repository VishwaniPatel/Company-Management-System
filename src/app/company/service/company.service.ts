import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../company.model';

@Injectable()
export class CompanyService {
  private baseUrl: string;

  constructor(private http:HttpClient) { 
    this.baseUrl = "http://localhost:3000/";
  }

  getCompany(): Observable<company[]> {
    const url: string = this.baseUrl + 'companyList'
    return this.http.get<company[]>(url);
  }
}
