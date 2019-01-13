import { CityAction, CityActionTypes } from './city.actions';

export const CITY_FEATURE_KEY = 'city';

/**
 * Interface for the 'City' data used in
 *  - CityState, and
 *  - cityReducer
 *
 *  Note: replace if already defined in another module
 */

/* tslint:disable:no-empty-interface */
export interface Entity {}

export interface CityState {
  list: Entity[]; // list of City; analogous to a sql normalized table
  selectedId?: string | number; // which City record has been selected
  loaded: boolean; // has the City list been loaded
  error?: any; // last none error (if any)
}

export interface CityPartialState {
  readonly [CITY_FEATURE_KEY]: CityState;
}

export const initialState: CityState = {
  list: [],
  loaded: false
};

export function cityReducer(
  state: CityState = initialState,
  action: CityAction
): CityState {
  switch (action.type) {
    case CityActionTypes.CityLoaded: {
      state = {
        ...state,
        list: action.payload,
        loaded: true
      };
      break;
    }
  }
  return state;
}
