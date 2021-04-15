import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetUsersService {

  private getUsersUrl = 'http://localhost:8090/api/v1.0/tweets/users/all';

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    return this.http.get<any>(this.getUsersUrl);
  }
}
