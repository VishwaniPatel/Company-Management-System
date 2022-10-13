import { Component, OnInit, Input } from '@angular/core';
import { company } from '../company.model';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Input() public companyList:company[];
  
  constructor() { 
    this.companyList = [];
    
    
  }

  ngOnInit(): void {
    
  }

}
