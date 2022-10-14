import { Component, HostBinding, OnInit, Output, EventEmitter  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { company } from '../company.model';
import { CompanyService } from '../service/company.service';


@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  // @Output() companyFormDetails: EventEmitter<company> = new EventEmitter<company>();
  @HostBinding('class') classes = '';
  public companyform: FormGroup;
  public isSubmitted: boolean;

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
  constructor(private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private companyService:CompanyService) {
    this.companyform = new FormGroup('');
    this.isSubmitted = false;
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
    )
  }

  onSaveCompanyDetails() {
    this.isSubmitted = true;
    if(this.companyform.valid){
      this.addCompany();
      this.isSubmitted = false;
      // this.companyFormDetails.emit(this.companyform.value);
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
    this.companyService.addCompany(this.companyform.value).subscribe(respose => {

      console.log("Data Added");
      
    })
  }
}
