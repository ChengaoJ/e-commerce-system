import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

<<<<<<< HEAD

import { User } from './../models/user';
import { AuthService } from './auth.service';
=======
import { User } from './../models/user';
>>>>>>> 15cf370bc64db6abe525f911f04b8ad5536398a2

@Injectable()
export class UserService {

  constructor(private http: HttpClient,
    private auth: AuthService) { }

    findUser(userId: number): Observable<User> {
<<<<<<< HEAD
      return this.http.get<User>(`http://localhost:8080/user/${userId}`);
    }

    getAllUsers(): Observable<User[]>{
      return this.http.get<User[]>(`http://localhost:8080/user/`);
    }

    newUser(name:string, email:string, password:string): Observable<any> {
       return this.http.post<User[]>(`http://localhost:8080/user/new/`,
       JSON.stringify({
        name:name,
=======
      return this.http.get<User>(`http://localhost:8080/users/user/${userId}`);
    }

    getAllUsers(): Observable<User[]>{
      return this.http.get<User[]>(`http://localhost:8080/users/`);
    }

    newUser(email:any, password:string): Observable<any> {
       return this.http.post<User[]>(`http://localhost:8080/users/user/new/${this.auth.id}`,
       JSON.stringify({
>>>>>>> 15cf370bc64db6abe525f911f04b8ad5536398a2
        email: email,
        password: password,
       
    }));
    }
}
