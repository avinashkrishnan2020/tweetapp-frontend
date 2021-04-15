import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserDetails } from '../models/user-details';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // REST call url
  private validateUserUrl = 'http://localhost:8090/api/v1.0/tweets/login'

  constructor(
    private http: HttpClient
  ) { }

  // Method to call REST service for validating login credentials
  validateLoginCredentials(user: UserDetails) {
    return this.http.post<any>(this.validateUserUrl, user);
  }


}

