import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { company } from './company.model';
import { DataTransferService } from './service/data-transfer.service';
import { CompanyService } from './service/company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {



  public dbcompanyList: company[];



  constructor(private companyService: CompanyService,
    private dataTransfer: DataTransferService) {
    this.dbcompanyList = [];

  }

  ngOnInit(): void {
    //Loads the data when it is added or updated
    this.dataTransfer.communicationData.subscribe((data) => {
      if (data) {
        this.getAllCompany();
      }
    })
    // Initially load all companies detail 
    this.getAllCompany();
  }

  // Function to get all company details using service (HTTP get)
  getAllCompany() {
    this.companyService.getCompany().subscribe((company: company[]) => {
      this.dbcompanyList = company;
    })
  }

  // Function to delete given company details using service (HTTP delete)
  deleteCompanyDetails(id: number) {
    if (confirm('Are you sure to delete this company?')) {
      this.companyService.deleteCompany(id).subscribe((Response) => {
        this.getAllCompany();
      })
    }
  }
}
