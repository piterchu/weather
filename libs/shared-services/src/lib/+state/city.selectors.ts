import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CITY_FEATURE_KEY, CityState } from './city.reducer';

// Lookup the 'City' feature state managed by NgRx
const getCityState = createFeatureSelector<CityState>(CITY_FEATURE_KEY);

const getLoaded = createSelector(
  getCityState,
  (state: CityState) => state.loaded
);
const getError = createSelector(
  getCityState,
  (state: CityState) => state.error
);

const getAllCity = createSelector(
  getCityState,
  getLoaded,
  (state: CityState, isLoaded) => {
    return isLoaded ? state.list : [];
  }
);
const getSelectedId = createSelector(
  getCityState,
  (state: CityState) => state.selectedId
);
const getSelectedCity = createSelector(
  getAllCity,
  getSelectedId,
  (city, id) => {
    const result = city.find(it => it['id'] === id);
    return result ? Object.assign({}, result) : undefined;
  }
);

export const cityQuery = {
  getLoaded,
  getError,
  getAllCity,
  getSelectedCity
};
