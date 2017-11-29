import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {ItemService} from "../../services/item.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements DoCheck {
  isManager: boolean;
  isLoggedIn: boolean;
  model: any = {};
  constructor(private login: AuthService, private itemService: ItemService, private router: Router) { }



  ngDoCheck() {
    if (localStorage.getItem('userlogin') != null) {
      this.isLoggedIn = true;
    } else {
      this.isLoggedIn = false;
    }
    if (localStorage.getItem('isManager') != null) {
      this.isManager = true;
    } else {
      this.isManager = false;
    }
  }
  search() {
    this.itemService.getSearchResult(this.model.searchString).subscribe(
      resp => this.router.navigate(["buy"])
    );
  }
}
