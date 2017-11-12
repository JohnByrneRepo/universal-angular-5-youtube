import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, ActivatedRoute } from '@angular/router';
import { YoutubeService } from '../services/youtube.service';
import { PipesModule } from '../pipes/pipes.module';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { App } from '../models/app.model';
import * as AppActions from '../actions/app.actions';

interface AppState {
  app: App;
}

@Component({
  selector: 'details-view',
  template: `
    <div *ngIf="video">
      <div class="details">
        <div class="video-container">
          <div class="video">
            <iframe width="560" height="349" [src]="video.id | sanitizeUrl"></iframe>
          </div>
        </div>
        <div class="details-container">
          <h2 class="title">{{ video.snippet.title }}</h2>
          <h3 class="published-at">{{ video.snippet.publishedAt | formatDate }}</h3>
          <h5 class="description">{{ video.snippet.description }}</h5>
        </div>
      </div>
    </div>
  `,
  providers: [YoutubeService],
  styleUrls: ['./details.scss']
})
export class DetailsComponent {
  app: Observable<App>;
  video: object;
  videoId: string;
  constructor(
    private youtubeService: YoutubeService,
    private route: ActivatedRoute,
    private store: Store<AppState>
  ) {
    this.app = this.store.select('app');
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.youtubeService.getVideoById(params['id'])
        .subscribe(video =>
          this.video = video
        );
    });
    this.store.dispatch(new AppActions.SetNavbarStatus('HIDDEN'));
  }
}

@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: '', component: DetailsComponent, pathMatch: 'full' }
    ]),
    PipesModule
  ]
})
export class DetailsModule {
}