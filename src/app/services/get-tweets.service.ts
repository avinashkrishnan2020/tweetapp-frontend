import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { mockTweetsList } from '../mock-data/mock-all-tweets';
import { Tweet } from '../models/Tweet';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetTweetsService {

  private allTweetsUrl = 'http://localhost:8090/api/v1.0/tweets/all';
  
  constructor(
    private http: HttpClient
  ) { }

  getTweets() {
    return this.http.get<any>(this.allTweetsUrl);
  }
}
