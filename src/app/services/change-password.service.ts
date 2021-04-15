import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChangePasswordService {

  constructor(
    private http: HttpClient
  ) { }

  changeUserPassword(newPassword: string) {
    const headers = new HttpHeaders()
      .set("newPassword", newPassword);

    console.log(newPassword);
    return this.http.put<any>('http://localhost:8090/api/v1.0/tweets/' + localStorage.getItem('loginId') + '/changePassword', null, {headers});
  }
}
