import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { company } from '../company.model';


@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  @Input() public companyList:company[];
  @Output() companyId: EventEmitter<number> = new EventEmitter<number>();
  
  constructor() { 
    this.companyList = []; 
  }

  ngOnInit(): void {
    
  }

  onDelete(id:number){
    this.companyId.emit(id);
  }

}
