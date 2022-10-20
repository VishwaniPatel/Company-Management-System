import { Component, HostBinding, OnInit, Output, EventEmitter, Input, createPlatform } from '@angular/core';
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

  public companyform: FormGroup;
  public isSubmitted: boolean;
  public companyId: string;
  public company_name!: string;
  public title: string = "";

  //Data to be display in dropdown of tag element
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
  constructor(private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService: CompanyService,
    private dataTransfer: DataTransferService) {
    this.companyform = new FormGroup('');
    this.isSubmitted = false;
    this.companyId = "";
    
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

    //patch value of company details using resolver
    this.activatedRoute.data.subscribe((data) => {
      this.companyform.patchValue(data['company']);
      this.company_name = data['company']?.companyName;
      this.companyId = data['company']?.id;
      this.dataTransfer.setCompanyName(this.company_name);
      });
      
    this.title = this.companyId ? "Edit" : "Add";
  }

  // On click of save button function is executed
  onSaveCompanyDetails() {
    this.isSubmitted = true;
    if (this.companyform.valid) {
      // edit company details
      if (this.companyId) {
        this.editCompanyDetails();
      } else {
        // add company details
        this.addCompany();
      }
      this.isSubmitted = false;
      //reset form values
      this.companyform.reset();
    }
  }

  uploadFile() {

  }
  //  on click of reset button, function clears all the values and nagivate to add form
  onCancel() {
    this.companyform.reset();
    this.router.navigate(['company', 'add']);
  }

  //add the form values of company details using service
  addCompany() {
    this.companyService.addCompany(this.companyform.value).subscribe((respose: company) => {
      //data transfer service using subject
      this.dataTransfer.getData(respose)
    })
  }

  //update company details using service and navigate to add form page
  editCompanyDetails() {
    this.companyService.editCompany(this.companyform.value, Number(this.companyId)).subscribe((response) => {
      this.dataTransfer.getData(response);
      this.router.navigate(['company', 'add']);
    })
  }
}
