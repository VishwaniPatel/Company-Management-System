import { Component, OnInit } from '@angular/core';
import { company } from './company.model';
import { CompanyService } from './service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {
 public dbcompanyList: company[];

  constructor(private companyService:CompanyService) {
    this.dbcompanyList =[];
  }

  ngOnInit(): void {
    this.getAllCompany();
    
  }
  getAllCompany(){
    this.companyService.getCompany().subscribe((company:company[])=>{
      this.dbcompanyList = company;
      
    })
  }

}
