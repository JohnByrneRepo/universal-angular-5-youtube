import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { YoutubeService } from './youtube.service';
import { HttpModule } from '@angular/http';

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

  it('should successfully get countries and cities', (done) => {
    youtubeService.getPlaylistById('PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP', 3)
      .subscribe(res => {
         expect(res[0].snippet.title).toEqual('Massive Attack - Teardrop');
         expect(res[1].snippet.title).toEqual('Massive Attack 1991 Blue Lines');
         expect(res[2].snippet.title).toEqual('MASSIVE ATTACK  -  Protection  ( Full Album )');
         done();
       });
  });
});