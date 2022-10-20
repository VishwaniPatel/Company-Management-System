import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {

  @Input() public companyList: company[];
  @Output() companyId: EventEmitter<number> = new EventEmitter<number>();

  public searchData: string;

  constructor(private router: Router) {
    this.companyList = [];
    this.searchData = "";
  }

  ngOnInit(): void { }

  // On click of delete button emit company id to company module
  onDelete(id: number) {
    this.companyId.emit(id);
  }
  // on click of edit data, nagivate to edit form page
  onEditCompanyDetails(company: company) {
    this.router.navigate(["company/edit", company.id]);
  }

}
