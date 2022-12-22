import { Component, Input, OnInit } from '@angular/core';

import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Input('formType') formType:String='';
  name:string='';
  constructor(private signService:SignService) { }

  ngOnInit(): void {
    if(this.formType=='signup') {
      this.name='sign up';
    }else if(this.formType==='signin') {
      this.name='sign in';
    }else if(this.formType==='signinEmail') {
      this.name='sign in with email';
    }else if(this.formType==='signupEmail') {
      this.name='sign up with email';
    }
  }
}
