import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class EditTweetService {

  private editTweetBaseUrl = 'http://localhost:8090/api/v1.0/tweets/';

  constructor(
    private http: HttpClient
  ) { }

  editTweet(userId: string, tweetId: string, editedTweet: Tweet) {
    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    return this.http.put<any>(this.editTweetBaseUrl + userId + '/update', editedTweet, {headers});
  }

}
