import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tweet } from '../models/Tweet';

@Injectable({
  providedIn: 'root'
})
export class PostCommentService {

  postCommentUrlBase = 'http://localhost:8090/api/v1.0/tweets/';

  constructor(
    private http: HttpClient
  ) { }

  postComment(username: string, tweetId: string, tweetComment: Tweet) {

    const headers = new HttpHeaders()
      .set("tweetId", tweetId);

    console.log(tweetId);
    return this.http.post<any>(this.postCommentUrlBase + username + '/reply', tweetComment, { headers });
  }

}
