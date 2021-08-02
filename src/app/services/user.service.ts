import { Injectable } from '@angular/core';

import { HttpClient, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { map } from 'rxjs/operators';
import { User } from '../models/user';

const httpHeaders = {
  headers: new HttpHeaders().set('Content-Type', 'application/json'),
};
@Injectable({
  providedIn: 'root',
})
export class UserService {
  api_url = 'http://127.0.0.1:8000/api';
  constructor(private myhttp: HttpClient) {}
  addUser(u: User) {
    return this.myhttp.post<User>(this.api_url + '/users', u);
  }

  getAll(): Observable<User[]> {
    return this.myhttp.get<User[]>(this.api_url + '/users');
  }
  getUserById(id): Observable<User> {
    return this.myhttp.get<User>(this.api_url + '/users/' + id);
  }
  submit(
    civility: any,
    lastName: any,
    firstName: any,
    email: any,
    password: any
  ) {
    let formdata = {
      civility: 'string',
      lastName: 'string',
      firstName: 'string',
      email: 'string',
      password: 'string',
    };

    formdata.civility = civility;
    formdata.lastName = lastName;
    formdata.firstName = firstName;
    formdata.email = email;
    formdata.password = password;
    return this.myhttp.post(this.api_url + `users`, formdata, httpHeaders).pipe(
      map((event) => {
        return event;
      })
    );
  }

  updateUser(user, userId) {
    return this.myhttp.put<User>(this.api_url + '/users/' + userId, user);
  }

  deleteUser(i: number): Observable<User> {
    return this.myhttp.delete<User>(this.api_url + '/users/' + i);
  }
}
