import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { provideMockActions } from '@ngrx/effects/testing';

import { NxModule } from '@nrwl/nx';
import { DataPersistence } from '@nrwl/nx';
import { hot } from '@nrwl/nx/testing';

import { CityEffects } from './city.effects';
import { LoadCity, CityLoaded } from './city.actions';

describe('CityEffects', () => {
  let actions: Observable<any>;
  let effects: CityEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        NxModule.forRoot(),
        StoreModule.forRoot({}),
        EffectsModule.forRoot([])
      ],
      providers: [
        CityEffects,
        DataPersistence,
        provideMockActions(() => actions)
      ]
    });

    effects = TestBed.get(CityEffects);
  });

  describe('loadCity$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: new LoadCity() });
      expect(effects.loadCity$).toBeObservable(
        hot('-a-|', { a: new CityLoaded([]) })
      );
    });
  });
});
