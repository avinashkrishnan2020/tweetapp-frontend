import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class RegisterUserService {

  private registerUserUrl = 'http://localhost:8090/api/v1.0/tweets/register';

  constructor(
    private http: HttpClient
  ) {}

  registerNewUser(newUser: UserDetails) {
    return this.http.post<any>(this.registerUserUrl, newUser);
  }
}
