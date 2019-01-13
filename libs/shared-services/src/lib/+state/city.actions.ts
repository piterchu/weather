import { Action } from '@ngrx/store';
import { Entity } from './city.reducer';

export enum CityActionTypes {
  LoadCity = '[City] Load City',
  CityLoaded = '[City] City Loaded',
  CityLoadError = '[City] City Load Error'
}

export class LoadCity implements Action {
  readonly type = CityActionTypes.LoadCity;
}

export class CityLoadError implements Action {
  readonly type = CityActionTypes.CityLoadError;
  constructor(public payload: any) {}
}

export class CityLoaded implements Action {
  readonly type = CityActionTypes.CityLoaded;
  constructor(public payload: Entity[]) {}
}

export type CityAction = LoadCity | CityLoaded | CityLoadError;

export const fromCityActions = {
  LoadCity,
  CityLoaded,
  CityLoadError
};
