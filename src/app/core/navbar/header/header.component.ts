import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataTransferService } from 'src/app/company/service/data-transfer.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public id!: number;
  public companyName!: string;
  constructor(private dataTransferService:DataTransferService,
    public router:Router) {  
  }

  ngOnInit(): void {
    // get company name using data transfer service
    this.dataTransferService.BreadCrumbData.subscribe((response:string)=>{
      this.companyName = response;     
    })
  }
  }


