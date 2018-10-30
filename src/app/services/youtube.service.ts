import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private httpClient: HttpClient) {


  }


  search(search: string) {
    return this.httpClient.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&order=relevance&maxResults=10&q=${search}&type=video&key=AIzaSyA670YSi6pImC-35QYETHPxp_rHItuNCvc`).toPromise();
      
  }
}
