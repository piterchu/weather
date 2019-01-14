import { Action } from '@ngrx/store';
import { City } from '@weather/shared-services';

export enum CityActionTypes {
  AddCity = '[City] Add city',
  LoadCity = '[City] Load City',
  CityLoaded = '[City] City Loaded',
  CityLoadError = '[City] City Load Error',
  RemoveCity = '[City] Remove City'
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
  constructor(public payload: City[]) {}
}

export class AddCity implements Action {
  readonly type = CityActionTypes.AddCity;
  constructor(public payload: City){}
}

export class RemoveCity implements Action {
  readonly type: CityActionTypes.RemoveCity;
  constructor(public payload: City) {}
}

export type CityAction = AddCity|LoadCity | CityLoaded | CityLoadError;

export const fromCityActions = {
  AddCity,
  LoadCity,
  CityLoaded,
  CityLoadError,
  RemoveCity
};
