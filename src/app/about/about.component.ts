import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  template: `
    <div class="about">
      A simple universal Angular 4 application that uses the youtube api.
      The app uses RxJS for Observables and NgRx for redux actions, with a moel and reducer.
      The code can be found here: <a>http://johnbyrne/universal-angular-5-youtube/</a>
    </div>
  `,
  styleUrls: ['./about.scss']
})
export class AboutComponent implements OnInit {
  public videos: object = [];

  constructor() {}

  ngOnInit() {}
}