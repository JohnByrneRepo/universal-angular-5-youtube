import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { YoutubeService } from './youtube.service';
import { HttpModule } from '@angular/http';

let playlistIdDictionary = {
  MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP'
}

let videoTitleDictionary = {
  video1: 'Massive Attack - Teardrop',
  video2: 'Massive Attack 1991 Blue Lines',
  video3: 'MASSIVE ATTACK  -  Protection  ( Full Album )'
}

let videoIdDictionary = {
  video1: 'u7K72X4eo_s',
  video2: 'HCpj9hLEfcQ',
  video3: 'K-sCgXPS7ws'
}

describe('YoutubeService', () => {
  let youtubeService: YoutubeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        HttpModule
      ],
      providers: [
        YoutubeService,
      ]
    });

    youtubeService = TestBed.get(YoutubeService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should successfully get playlist', (done) => {
    youtubeService.getPlaylistById(playlistIdDictionary.MassiveAttack, 3)
      .subscribe(res => {
         expect(res[0].snippet.title).toEqual(videoTitleDictionary.video1);
         expect(res[1].snippet.title).toEqual(videoTitleDictionary.video2);
         expect(res[2].snippet.title).toEqual(videoTitleDictionary.video3);
         expect(res[0].contentDetails.videoId).toEqual(videoIdDictionary.video1);
         expect(res[1].contentDetails.videoId).toEqual(videoIdDictionary.video2);
         expect(res[2].contentDetails.videoId).toEqual(videoIdDictionary.video3);
         done();
       });
  });

  it('should successfully get playlist items', (done) => {
    youtubeService.getVideoById(videoIdDictionary.video1)
      .subscribe(res => {
         expect(res.snippet.title).toEqual(videoTitleDictionary.video1);
         done();
       });
  });
});