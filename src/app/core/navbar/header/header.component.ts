import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  public id: any;
  constructor(private activatedRoute: ActivatedRoute) { 
   
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params['company_id']
      console.log(this.id);
    })
    console.log(this.activatedRoute);
  }

}
