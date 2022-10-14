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

  addCompany(company:company): Observable<company> {
    const url: string = this.baseUrl + 'companyList'
    return this.http.post<company>(url,company);
  }

  deleteCompany(id:number): Observable<company> {
    const url: string = this.baseUrl + 'companyList/' + id;
    return this.http.delete<company>(url);
  }
}
