import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { company } from '../company.model';


@Injectable()
export class CompanyService {
  private baseUrl: string;

  constructor(private http: HttpClient) {
    this.baseUrl = "http://localhost:3000/";
  }

  // HTTP get service to get data from database
  getCompany(): Observable<company[]> {
    const url: string = this.baseUrl + 'companyList'
    return this.http.get<company[]>(url);
  }

  // HTTP post service to add data to database
  addCompany(company: company): Observable<company> {
    const url: string = this.baseUrl + 'companyList'
    return this.http.post<company>(url, company);
  }

  // HTTP delete service to delete data from database
  deleteCompany(id: number): Observable<company> {
    const url: string = this.baseUrl + 'companyList/' + id;
    return this.http.delete<company>(url);
  }

  // HTTP put service to update data from database
  editCompany(company: company, id: number): Observable<company> {
    const url: string = this.baseUrl + 'companyList/' + id;
    return this.http.put<company>(url, company);
  }

  // HTTP get service to get company detials from id from database
  getCompanyById(id: number): Observable<company> {
    const url: string = this.baseUrl + 'companyList/' + id;
    return this.http.get<company>(url);
  }
}
