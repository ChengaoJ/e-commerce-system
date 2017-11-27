import {Component, OnInit} from '@angular/core';
import {User} from './../../models/user';
import {FormControl, Validators} from '@angular/forms';
import {FocusMonitor} from '@angular/cdk/a11y';
import {coerceBooleanProperty} from '@angular/cdk/coercion';
import {ElementRef, Input, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {MatFormFieldControl} from '@angular/material/form-field';
import {Subject} from 'rxjs/Subject';
import {MatDatepickerModule} from '@angular/material/datepicker';

import { UserService } from './../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  email = new FormControl('', [Validators.required, Validators.email]);
  pass:string;

  constructor(private service: UserService ){
  }

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
    this.email.hasError('email') ? 'Not a valid email' :
      '';
    }

    newAccount(){
      this.service.newUser(this.email, this.pass)
      .subscribe(() => alert("User Created!"), err => alert(err));;
    }
}


