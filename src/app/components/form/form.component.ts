import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FormCheckService } from 'src/app/services/form-check.service';
import { IUser } from 'src/app/interfaces/iuserInfo';
import { Iinput } from 'src/app/interfaces/iinput';
import { Observable } from 'rxjs';
import { SignService } from 'src/app/services/sign.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  @Input('formType') formType: string = '';
  @Output() clicked: EventEmitter<Event> = new EventEmitter();
  formUsername: string = '';
  formPassword: string = '';
  formEmail: string = '';
  message: string = '';
  correct: boolean = false;
  constructor(
    private formCheck: FormCheckService,
    private signService: SignService
  ) {}
  fullInfo:Observable<IUser[]>=new Observable<IUser[]>();

  ngOnInit(): void {}

  onClick = (event: Event) => {
    event.preventDefault();
    if (this.formType == 'signup') {
      this.correct =
        this.formCheck.checkUsername(this.formUsername) &&
        this.formCheck.checkPassword(this.formPassword) &&
        this.formCheck.checkEmail(this.formEmail);
    } else if (this.formType === 'signin') {
      this.correct =
        this.formCheck.checkUsername(this.formUsername) &&
        this.formCheck.checkPassword(this.formPassword);
    }

    if (this.correct) {
      this.message = 'please wait';
      if (this.formType == 'signup') {
        this.signService.signup(
          this.formUsername,
          this.formPassword,
          this.formEmail
        );
      } else if (this.formType === 'signin') {

        const res = this.signService.signin(
          this.formUsername,
          this.formPassword
        )
        res === false
          ? (this.message = 'user does not exist')
          : (this.message = 'welcome!');
      }
    } else {
      this.message = 'please fill out the form correctly';
    }
  };
  onClickSigninEmail(event: Event) {
    event.preventDefault();
    this.correct = this.formCheck.checkEmail(this.formEmail);
    if (this.correct) {
      this.message = 'please wait';
      const res = this.signService.signinWithEmail(this.formEmail);
      res === false
        ? (this.message = 'user does not exist')
        : (this.message = 'welcome!');
    } else {
      this.message = 'please fill out the form correctly';
    }
  }
  onClickSignupEmail(event: Event) {
    event.preventDefault();
    this.correct = this.formCheck.checkEmail(this.formEmail);
    if (this.correct) {
      this.message = 'please waite';
      this.signService.signupWithEmail(this.formEmail);
    } else {
      this.message = 'please fill out the form correctly';
    }
  }

  onChange(obj: Iinput) {
    if (obj.type === 'username') {
      this.formUsername = obj.value;
    } else if (obj.type === 'password') {
      this.formPassword = obj.value;
    } else if (obj.type === 'email') {
      this.formEmail = obj.value;
    }
  }
}
