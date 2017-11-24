import {Component, DoCheck, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck {
  isManager: boolean;
  isLoggedIn: boolean;
  // navlinks = [{path: 'buy', label: 'Buy'}, {path: 'sell', label: 'Sell'}];
  constructor(private login: AuthService) { }

  // ngOnInit() {
  //   this.isLoggedIn = this.login.userlogin;
  //   // this.isLoggedIn = false;
  //   // this.isManager = true;
  //   this.isManager = this.login.isAdmin;
  // }

  ngDoCheck() {
    this.isLoggedIn = this.login.userlogin;
    // this.isLoggedIn = false;
    // this.isManager = true;
    this.isManager = this.login.isAdmin;
    console.log(this.isLoggedIn);
    console.log(this.isManager);
  }
}
