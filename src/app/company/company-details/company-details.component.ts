import { Component, OnInit } from '@angular/core';
import { company } from '../company.model';
import { CompanyService } from '../service/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.scss']
})
export class CompanyDetailsComponent implements OnInit {
  public companyList: company[];
  public selectedPage: number = 1;
  companyPerPage: number = 4;
  public companies: company[] = [];
  constructor(private companyService: CompanyService) {
    this.companyList = [];
  }

  ngOnInit(): void {
    this.getDetails();
  }
 
  getDetails() {
    this.companyService.getCompany().subscribe((company: company[]) => {
      this.companyList = company;
      let pageIndex = (this.selectedPage - 1) * this.companyPerPage;
      this.companies = this.companyList.slice(pageIndex, this.companyPerPage);
      console.log(this.companyList)
    })
  } 

  changePageSize(event: Event) {
const newSize = (event.target as HTMLInputElement).value;
this.companyPerPage = Number(newSize);
this.changePage(1);
  }

  get pageNumbers(): number[] {
    return Array(Math.ceil(this.companyList.length / this.companyPerPage))
      .fill(0).map((x, i) => i + 1);
  }
  changePage(page : any){
    this.selectedPage = page;
    this.sliceCompanies();
  }
  sliceCompanies(){
    let pageIndex = (this.selectedPage - 1) * this.companyPerPage;
    let endIndex = (this.selectedPage - 1) * this.companyPerPage + this.companyPerPage;
    this.companies = [];
    this.companies = this.companyList.slice(pageIndex, endIndex);
  }
}



