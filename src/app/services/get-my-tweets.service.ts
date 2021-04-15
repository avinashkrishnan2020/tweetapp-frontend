import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetMyTweetsService {

  private getMyTweetsUrl = 'http://localhost:8090/api/v1.0/tweets/';
  constructor(
    private http: HttpClient
  ) { }

  getMyTweets(userId: String) {
    return this.http.get<any>(this.getMyTweetsUrl + userId);
  }


}
