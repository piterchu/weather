import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import { DataPersistence } from '@nrwl/nx';

import { CityPartialState } from './city.reducer';
import {
  LoadCity,
  CityLoaded,
  CityLoadError,
  CityActionTypes
} from './city.actions';

@Injectable()
export class CityEffects {
  @Effect() loadCity$ = this.dataPersistence.fetch(CityActionTypes.LoadCity, {
    run: (action: LoadCity, state: CityPartialState) => {
      // Your custom REST 'load' logic goes here. For now just return an empty list...
      return new CityLoaded([]);
    },

    onError: (action: LoadCity, error) => {
      console.error('Error', error);
      return new CityLoadError(error);
    }
  });

  constructor(
    private actions$: Actions,
    private dataPersistence: DataPersistence<CityPartialState>
  ) {}
}
