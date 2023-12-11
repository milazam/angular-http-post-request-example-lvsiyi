import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpEvent,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { User, UserInfo } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public saveUser(user: User): Observable<any> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<any>(url, user);
  }

  public saveUserTyped(user: User): Observable<UserInfo> {
    const url = 'https://reqres.in/api/users';
    return this.http.post<UserInfo>(url, user);
  }
}
