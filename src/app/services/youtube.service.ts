import { Injectable } from '@angular/core';
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class YoutubeService {
  url :string = 'https://www.googleapis.com/youtube/v3';
  
  constructor(private http:Http) { }

  getPlaylistById(playlistId: string, numItems: number) {

    let myHeaders = new Headers();
    let myParams = new URLSearchParams();

    myHeaders.append('Content-Type', 'application/json');

    myParams.append('playlistId', playlistId);
    myParams.append('key', 'AIzaSyAMiatLpUm-IyBYqEV6RqS9vyBPL52VMXE');
    myParams.append('part', 'snippet,contentDetails,status');
    myParams.append('maxResults', numItems.toString());

    let options = new RequestOptions({
      headers: myHeaders,
      params: myParams
    });

    return this.http.get(`${this.url}/playlistItems`, options)
      .map(this.extractPlaylist)
      .catch(this.handleError);
  }

  private extractPlaylist(res: Response) {
    let body = res.json();
    return body.items;
  }

  getVideoById(videoId: string) {

    let myHeaders = new Headers();
    let myParams = new URLSearchParams();

    myHeaders.append('Content-Type', 'application/json');

    myParams.append('id', videoId);
    myParams.append('key', 'AIzaSyAMiatLpUm-IyBYqEV6RqS9vyBPL52VMXE');
    myParams.append('part', 'id,snippet');

    let options = new RequestOptions({
      headers: myHeaders,
      params: myParams
    });

    return this.http.get(`${this.url}/videos`, options)
      .map(this.extractVideo)
      .catch(this.handleError);
  }

  private extractVideo(res: Response) {
    let body = res.json();
    return body.items[0];
  }

  private handleError (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }
}
