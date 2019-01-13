import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@weather/shared-components';
import { cityReducer, CityState } from '@weather/shared-services';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';
import { ActionReducer, INIT, StoreModule, UPDATE } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { storeFreeze } from 'ngrx-store-freeze';

export function citySync(reducer: ActionReducer<{ cityReducer: CityState }>) {
  return (state, action) => {
    let reducedState = reducer(state, action);
    if (action.type === INIT) {
      const data = window.localStorage.getItem('weatherApp');
      if (data) {
        reducedState = {
          ...reducedState,
          cityReducer: {list: JSON.parse(data), loaded: true},
        };
      }
    }
    return reducedState;
  };
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'settings', loadChildren: '@weather/settings#SettingsModule' },
        { path: 'home', loadChildren: '@weather/home#HomeModule' },
        { path: '', redirectTo: '/home', pathMatch: 'full' }
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedComponentsModule,
    StoreModule.forRoot(
      { cityReducer },
      { metaReducers: !environment.production ? [citySync, storeFreeze] : [citySync] }
    ),
    EffectsModule.forRoot([]),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    StoreRouterConnectingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
