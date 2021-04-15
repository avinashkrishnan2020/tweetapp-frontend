import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class PostTweetsService {

  private postTweetUrl: string;

  constructor(
    private http: HttpClient
  ) { 
    this.postTweetUrl = "http://localhost:8090/api/v1.0/tweets/christoph_walowitz/add";
  }

  postTweet(newTweet: Tweet) {
    return this.http.post<Tweet>(this.postTweetUrl, newTweet);
  }

}
