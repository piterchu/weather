import { City } from '@weather/shared-services';
import { CityAction, CityActionTypes } from './city.actions';

export const CITY_FEATURE_KEY = 'city';


export interface CityState {
  list: City[]; // list of City; analogous to a sql normalized table
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
    case CityActionTypes.AddCity: {
      state = {
        ...state,
        list: state.list.concat(action.payload)
      };
      break;
    }
  }
  return state;
}
