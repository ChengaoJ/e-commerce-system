import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Router} from "@angular/router";
import {AlertService} from "./alert.service";
import {User} from "../models/user";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService {
  loginURL = 'http://localhost:8080/user';
  userlogin = false;
  isAdmin = false;
  id: number;
  constructor(private http: HttpClient, private router: Router, private alertService: AlertService) { }
  login(username: string, password: string) {
    const url = `${this.loginURL}/login`;
    return this.http.post(url, {email: username, password: password}).subscribe(
      resp => {
        localStorage.setItem('currentUser', JSON.stringify(resp));
        this.userlogin = true;
        this.id = resp["id"];
        console.log(this.id);
        console.log(localStorage.getItem('currentUser'));
        if (resp["userrole"] === 'admin') {
          this.isAdmin = true;
        }
        this.router.navigate(['homepage']);
      },
      err => {
        console.log('login fail');
        this.alertService.error("Invalid Username or Password");
      }
    );
  }
  getUser(): Observable<User> {
    const url = `${this.loginURL}/profile`;
    return this.http.post<User>(url, JSON.parse(localStorage.getItem('currentUser')));
  }
  logout() {
    localStorage.removeItem('currentUser');
    this.userlogin = false;
    this.isAdmin = false;
  }
}
