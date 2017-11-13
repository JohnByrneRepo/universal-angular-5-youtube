import { Component, OnInit, HostListener, Inject } from "@angular/core";
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { YoutubeService } from '../services/youtube.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { App } from '../models/app.model';
import * as AppActions from '../actions/app.actions';

interface AppState {
  app: App;
}

@Component({
  selector: 'list',
  template: `
    <div class="list">
      <li *ngFor="let video of videos; let idx = index">
        <a class="listing-image" [routerLink]="['details', video.contentDetails.videoId]">
          <div class="thumbnail">
            <img src="{{ video.snippet.thumbnails.high.url }}">
          </div>
        </a>
        <div class="listing-data">
          <a [routerLink]="['details', video.contentDetails.videoId]">
            <h2 class="title">{{ video.snippet.title }}</h2>
          </a>
          <h3 class="published-at">{{ video.contentDetails.videoPublishedAt | formatDate }}</h3>
          <h5 class="description" [innerHTML]="video.snippet.description | preserveUrls"></h5>
        </div>
      </li>
    </div>
  `,
  providers: [YoutubeService],
  styleUrls: ['./list.scss']
})
export class ListComponent {
  app: Observable<App>;
  videos: object = [];
  numItems :number = 3;
  pageSize :number = 3;
  playlistId :string = '';

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private youtubeService: YoutubeService,
    private store: Store<AppState>
  ) {
    this.app = this.store.select('app');
  }

  @HostListener("window:scroll", [])
  onWindowScroll() {
    let number = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    let list = document.getElementsByClassName('list')[0];
    if (list.scrollHeight === list.scrollTop + list.clientHeight) {
      this.numItems += 3;
      this.youtubeService.getPlaylistById(this.playlistId, this.numItems)
        .subscribe(videos =>
          this.videos = videos
      );
    }
  }

  getPlaylist() {
    this.app.subscribe(app => {
      this.playlistId = app.playlistId;
      this.numItems = this.pageSize;
      this.youtubeService.getPlaylistById(app.playlistId, this.numItems)
        .subscribe(videos =>
          this.videos = videos
      );
    }); 
  }

  ngOnInit() {
    this.getPlaylist();
    setTimeout(() => {
      this.store.dispatch(new AppActions.SetNavbarStatus('FULL_WIDTH'));
    }, 0);
  }
}