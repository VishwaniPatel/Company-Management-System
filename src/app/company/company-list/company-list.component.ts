import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Input() public companyList:company[];
  @Output() companyId: EventEmitter<number> = new EventEmitter<number>();
  @Output() editCompany: EventEmitter<company> = new EventEmitter<company>();

  public searchText:string;
  
  constructor(private router:Router) { 
    this.companyList = []; 
    this.searchText="";
  }

  ngOnInit(): void {}

  onDelete(id:number){
    this.companyId.emit(id);
  }
  onEditCompanyDetails(company:company) {
    this.router.navigate(["company/edit",company.id]);
  }

}
