import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  CITY_FEATURE_KEY,
  initialState as cityInitialState,
  cityReducer
} from './+state/city.reducer';
import { CityEffects } from './+state/city.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(CITY_FEATURE_KEY, cityReducer, {
      initialState: cityInitialState
    }),
    EffectsModule.forFeature([CityEffects])
  ]
})
export class SharedServicesModule {}
