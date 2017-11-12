import { Action } from '@ngrx/store';

export const SET_PLAYLIST_ID  = 'SET_PLAYLIST_ID';
export const SET_NAVBAR_STATUS  = 'SET_NAVBAR_STATUS';
export const RESET = 'Reset';

export class SetPlaylistId implements Action {
  readonly type = SET_PLAYLIST_ID;
  constructor(public payload: string) {}
}
export class SetNavbarStatus implements Action {
  readonly type = SET_NAVBAR_STATUS;
  constructor(public payload: string) {}
}
export class Reset implements Action {
  readonly type = RESET;
}

export type All
  = SetPlaylistId
  | SetNavbarStatus
  | Reset;