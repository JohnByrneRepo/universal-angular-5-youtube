import { Component, OnInit, Input } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { RouterLinkActive } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { App } from './models/app.model';
import * as AppActions from './actions/app.actions';

interface AppState {
  app: App;
}

const playlistIdDictionary = {
  MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
  Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
}

@Component({
  selector: 'app-root',
  template: `
    <div class="app-root">
      <h1 class="page-title">Beyond Youtube</h1>
      <div href="/" class="return-to-listing" *ngIf="!navbarVisibile">
        <a routerLink="/">< Back to list of videos</a>
      </div>
      <div class="page-links" *ngIf="navbarVisibile">
        <a class="page-link" routerLink="/" routerLinkActive="active-link" [routerLinkActiveOptions]="{ exact: true }">List</a>
        <a class="page-link" routerLink="/about" routerLinkActive="active-link">About</a>
        <mat-form-field>
          <mat-select [(ngModel)]="selectedOption" (ngModelChange)="updatePlaylistSelection($event)">
            <mat-option *ngFor="let playlistName of playlistNames; let i = index" [value]="i">
              {{playlistName}}
            </mat-option>
          </mat-select>
        </mat-form-field>
      </div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./app.scss'],
})
export class AppComponent {
  app: Observable<App>;
  navbarVisibile: boolean = true;
  playlistNames = ['MassiveAttack', 'Portishead'];
  selectedOption = 0;

  constructor(
    private store: Store<AppState>,
  ) {
    this.app = this.store.select('app');
  }

  ngOnInit() {
    this.app.subscribe(app => {
      this.navbarVisibile = app.navbarStatus === 'FULL_WIDTH';
    });
  }

  updatePlaylistSelection($event) {
    this.store.dispatch(new AppActions.SetPlaylistId(
      playlistIdDictionary[this.playlistNames[$event]]
    ));
  }
}