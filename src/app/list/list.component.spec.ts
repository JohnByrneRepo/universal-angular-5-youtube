import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PipesModule } from '../pipes/pipes.module';
import { ListComponent } from './list.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpModule } from '@angular/http';
import { StoreModule, Store } from '@ngrx/store';
import { appReducer } from '../reducers/app.reducer';
import { YoutubeService } from '../services/youtube.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

describe('ListComponent (templateUrl)', () => {

  let comp: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let de: DebugElement;
  let el: HTMLElement;
  let service: YoutubeService;
  // let router: Router;

  let listImages: DebugElement[]; // any[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListComponent ],
      imports: [
        HttpClientTestingModule,
        HttpModule,
        RouterModule.forRoot([
          { path: '', component: ListComponent, pathMatch: 'full'}
        ]),
        PipesModule,
        StoreModule.forRoot({
          app: appReducer,
        }),
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue: '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    let mockPlaylist: any[] = [{
      "kind": "youtube#playlistItem",
      "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/vJGoxRytSeT28iu3jf3_FwDty3I\"",
      "id": "UExkTUNCWl82N20xdUlidTBJTDlQQV9CTlJyeFNmZ2huUC4yODlGNEE0NkRGMEEzMEQy",
      "snippet": {
        "publishedAt": "2017-11-11T02:02:01.000Z",
        "channelId": "UCAoytD4WHc_5JTqsvO2u1Gg",
        "title": "Massive Attack - Teardrop",
        "description": "Listen to more from Massive Attack: https://MassiveAttack.lnk.to/Essentials\nDiscover more about this classic song here: http://www.udiscovermusic.com/stories/massive-attack-make-no-1-with-mezzanine\n\nBlue Lines 2012: Rebuilt from the original tapes, remixed and remastered.\nFind out more and order yours here: http://smarturl.it/bluelines2012v \n#bluelines2012\n\nOfficial video of Massive Attack performing Teardrop from the album Mezzanine. \nBuy It Here: http://smarturl.it/pq4bmk  \nLike Massive Attack on Facebook: http://www.facebook.com/massiveattack \nFollow Massive Attack on Twitter: https://twitter.com/MassiveAttackUK \nOfficial Website: http://massiveattack.com \nSee more videos: http://www.youtube.com/user/madotie",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/u7K72X4eo_s/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Pixel Block",
        "playlistId": "PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP",
        "position": 0,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "u7K72X4eo_s"
        }
      },
      "contentDetails": {
        "videoId": "u7K72X4eo_s",
        "videoPublishedAt": "2009-03-06T12:00:03.000Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/c3LzA9Sfzz9fPDe5CDnCohwgx-k\"",
      "id": "UExkTUNCWl82N20xdUlidTBJTDlQQV9CTlJyeFNmZ2huUC4wMTcyMDhGQUE4NTIzM0Y5",
      "snippet": {
        "publishedAt": "2017-11-11T02:02:13.000Z",
        "channelId": "UCAoytD4WHc_5JTqsvO2u1Gg",
        "title": "Massive Attack 1991 Blue Lines",
        "description": "1. \"Safe from Harm\" (featuring. Shara Nelson) - 5:19\n2. \"One Love\" (featuring. Horace Andy) - 4:49 (@5:19) \n3. \"Blue Lines\" - 4:22 (@10:08) \n4. \"Be Thankful for What You've Got\" (featuring. Tony Bryan) - 4:10 (@14:29) \n5. \"Five Man Army\" (featuring. Horace Andy) - 6:04 (@18:39) \n6. \"Unfinished Sympathy\" (featuring. Shara Nelson) - 5:08 (@24:43) \n7. \"Daydreaming\" (featuring. Shara Nelson) - 4:15 (@29:51) \n8. \"Lately\" (featuring. Shara Nelson) - 4:26 (@34:07) \n9. \"Hymn of the Big Wheel\" (featuring. Horace Andy & Neneh Cherry) - 6:37 (@38:33)",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/HCpj9hLEfcQ/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/HCpj9hLEfcQ/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/HCpj9hLEfcQ/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/HCpj9hLEfcQ/sddefault.jpg",
            "width": 640,
            "height": 480
          }
        },
        "channelTitle": "Pixel Block",
        "playlistId": "PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP",
        "position": 1,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "HCpj9hLEfcQ"
        }
      },
      "contentDetails": {
        "videoId": "HCpj9hLEfcQ",
        "videoPublishedAt": "2017-02-06T20:04:09.000Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    },
    {
      "kind": "youtube#playlistItem",
      "etag": "\"ld9biNPKjAjgjV7EZ4EKeEGrhao/OVSbtgNfQ9QRoxppYNvYaXIidEo\"",
      "id": "UExkTUNCWl82N20xdUlidTBJTDlQQV9CTlJyeFNmZ2huUC41MjE1MkI0OTQ2QzJGNzNG",
      "snippet": {
        "publishedAt": "2017-11-11T02:02:21.000Z",
        "channelId": "UCAoytD4WHc_5JTqsvO2u1Gg",
        "title": "MASSIVE ATTACK  -  Protection  ( Full Album )",
        "description": "NOTE: The uploading of this video is not for profit. I own no rights on this album/songs.\nIn deep respect to the artists, i want to share some pearls you won´t hear on the radio everyday...:)  ...if you like it, buy the fucking album !  © 1994 Wild Bunch Records / Circa Records\n\nTrack List:\n\n01  Protection feat. TRACEY THORN                                       00:00\n02  Karmacoma feat. 3D & TRICKY                                         07:51\n03  Three feat. NICOLETTE                                                     13:08\n04  Weather Storm feat. CRAIG ARMSTRONG                         16:57\n05  Spying Glass feat. HORACE ANDY                                   21:57\n06  Better Things feat. TRACEY THORN & CHESTER KAMEN  27:18\n07  Eurochild feat. 3D & TRICKY                                             31:33\n08  Sly feat. NICOLETTE                                                        36:42\n09  Heat Miser feat. CRAIG ARMSTRONG & ROB MERRIL       42:07\n10  Light My Fire (Live) ( the doors ) feat. HORACE ANDY & DADDY G        45:47",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/K-sCgXPS7ws/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/K-sCgXPS7ws/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/K-sCgXPS7ws/hqdefault.jpg",
            "width": 480,
            "height": 360
          },
          "standard": {
            "url": "https://i.ytimg.com/vi/K-sCgXPS7ws/sddefault.jpg",
            "width": 640,
            "height": 480
          },
          "maxres": {
            "url": "https://i.ytimg.com/vi/K-sCgXPS7ws/maxresdefault.jpg",
            "width": 1280,
            "height": 720
          }
        },
        "channelTitle": "Pixel Block",
        "playlistId": "PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP",
        "position": 2,
        "resourceId": {
          "kind": "youtube#video",
          "videoId": "K-sCgXPS7ws"
        }
      },
      "contentDetails": {
        "videoId": "K-sCgXPS7ws",
        "videoPublishedAt": "2014-11-09T22:24:51.000Z"
      },
      "status": {
        "privacyStatus": "public"
      }
    }];

    fixture = TestBed.createComponent(ListComponent);
    service = fixture.debugElement.injector.get(YoutubeService);
    spyOn(service, 'getPlaylistById').and.returnValue(Observable.of<any[]>(mockPlaylist));
    fixture = TestBed.createComponent(ListComponent);
    comp = fixture.componentInstance;
  });

  it('adds a list to the page', () => {
    fixture.whenStable().then(() => {
      fixture.detectChanges();
      comp = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('.list'));
      el = de.nativeElement;
      // console.log(el);
      expect(el).toBeDefined();
    });
  });
});
