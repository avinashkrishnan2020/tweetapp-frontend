import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class DeleteTweetService {

  private deleteTweetBaseUrl = 'http://localhost:8090/api/v1.0/tweets/'

  constructor(
    private http: HttpClient
  ) { }

  deleteTweet(userId: string, tweetId: string) {

    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    return this.http.delete<any>(this.deleteTweetBaseUrl + userId + '/delete',
      {headers});
  }
}
