import { Component, HostBinding, OnInit, Output, EventEmitter, Input, createPlatform  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { company } from '../company.model';
import { DataTransferService } from '../service/data-transfer.service';
import { CompanyService } from '../service/company.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
@Output() updateCompany: EventEmitter<company> = new EventEmitter<company>();
  @HostBinding('class') classes = '';
  public companyform: FormGroup;
  public isSubmitted: boolean;
  public companyId: string;

  categories = [
    {
      id: 1, name: 'Front-end'
    },
    {
      id: 2, name: 'back-end'
    },
    {
      id: 3, name: 'Database Design'
    },
    {
      id: 4, name: 'Business Analytics'
    }]
  constructor(private router:Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService:CompanyService,
    private dataTransfer:DataTransferService) {
    this.companyform = new FormGroup('');
    this.isSubmitted = false;
    this.companyId = ""; 
    this.activatedRoute.params.subscribe((params) => {
      this.companyId = params['company_id'];
      if (this.companyId) {
        this.getCompanyById();
      }
  })
}

  ngOnInit(): void {
    this.companyform = this.formBuilder.group(
      {
        id: [''],
        companyName: ['', Validators.required],
        companyDetails: ['', Validators.required],
        companyTags: ['', Validators.required],
        companyLogo: ['', Validators.required]
      }
    );
    
  }

  onSaveCompanyDetails() {
    this.isSubmitted = true;
    if(this.companyform.valid){
      if (this.companyId) {
        this.editCompanyDetails();
      }else{
        this.addCompany();
      }      
      this.isSubmitted = false;
      console.log("Data Added");
      this.companyform.reset();
    }
  }

  uploadFile() {

  }

  onCancel() {
    this.companyform.reset();
  
  }

  addCompany(){
    
    this.companyService.addCompany(this.companyform.value).subscribe((respose:company) => {
      this.dataTransfer.getData(respose)
    })
  }

  getCompanyById(){
   this.companyService.getCompanyById(Number(this.companyId)).subscribe(company => {
        this.companyform.patchValue(company);
      })
  }

  editCompanyDetails(){
    this.companyService.editCompany( this.companyform.value,Number(this.companyId)).subscribe((response) => {
      this.dataTransfer.getData(response);
      this.router.navigate(['company','add']);
    })
}
}
