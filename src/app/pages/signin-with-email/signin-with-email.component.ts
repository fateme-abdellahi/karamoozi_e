import { Component, Directive, OnInit, ViewChild, ViewChildren } from '@angular/core';

import { ButtonComponent } from 'src/app/components/button/button.component';

@Component({
  selector: 'app-signin-with-email',
  templateUrl: './signin-with-email.component.html',
  styleUrls: ['./signin-with-email.component.css']
})
export class SigninWithEmailComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
