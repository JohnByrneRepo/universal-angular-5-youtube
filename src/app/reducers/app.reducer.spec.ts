import { SET_PLAYLIST_ID, SET_NAVBAR_STATUS, RESET } from '../actions/app.actions';
import { App } from '../models/app.model';
import { appReducer } from './app.reducer';

const playlistIdDictionary = {
  MassiveAttack: 'PLdMCBZ_67m1uIbu0IL9PA_BNRrxSfghnP',
  Portishead: 'PLdMCBZ_67m1tFPUrP0NWL7_eJ6htyvPV9'
}

const defaultState: App = {
  navbarStatus: 'FULL_WIDTH',
  playlistId: playlistIdDictionary.MassiveAttack
}

describe('appReducer reducers', () => {                                     
  it('should handle initial state', () => {                              
    expect(                                                         
      appReducer(defaultState, {
        type: RESET
      })                                             
    )                                                                    
    .toEqual(defaultState)                                              
  });                                                                    

  it('should handle SET_PLAYLIST_ID', () => {                          
    expect(                                                         
      appReducer(defaultState, {                                                       
        type: SET_PLAYLIST_ID,
        payload: playlistIdDictionary.Portishead                                      
      })                                                                 
    )                                                                    
    .toEqual({
      navbarStatus: 'FULL_WIDTH',
      playlistId: playlistIdDictionary.Portishead
    })
  });                                                                    

  it('should handle SET_NAVBAR_STATUS', () => {                          
    expect(                                                         
      appReducer(defaultState, {                                                       
        type: SET_NAVBAR_STATUS,
        payload: 'HIDDEN'                                         
      })                                                                 
    )                                                                    
    .toEqual({
      navbarStatus: 'HIDDEN',
      playlistId: playlistIdDictionary.MassiveAttack
    })
  });                                                                    
});