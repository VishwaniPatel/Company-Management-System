import { Component, HostBinding, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
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
    private formBuilder: FormBuilder) {
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
  }

  uploadFile() {

  }

  onCancel() {
    this.companyform.reset();
  }

}
