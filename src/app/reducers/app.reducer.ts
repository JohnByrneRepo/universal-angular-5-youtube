import * as AppActions from '../actions/app.actions';
import { App } from '../models/app.model'
export type Action = AppActions.All;

const playlistIdDictionary = {
  MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
  Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
}

const defaultState: App = {
  navbarStatus: 'FULL_WIDTH',
  playlistId: playlistIdDictionary.MassiveAttack
}

const newState = (state, newData) => {
  return Object.assign({}, state, newData)
}

export function appReducer(state: App = defaultState, action: Action) {
  console.log(action.type, state);
  
  switch (action.type) {  
      case AppActions.SET_PLAYLIST_ID:
        return newState(state, { playlistId: action.payload });
      case AppActions.SET_NAVBAR_STATUS:
        return newState(state, { navbarStatus: action.payload });
      case AppActions.RESET:
        return defaultState;
      default:
        return state;
  }
}