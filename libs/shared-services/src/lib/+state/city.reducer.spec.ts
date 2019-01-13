import { CityLoaded } from './city.actions';
import { CityState, Entity, initialState, cityReducer } from './city.reducer';

describe('City Reducer', () => {
  const getCityId = it => it['id'];
  let createCity;

  beforeEach(() => {
    createCity = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
  });

  describe('valid City actions ', () => {
    it('should return set the list of known City', () => {
      const citys = [createCity('PRODUCT-AAA'), createCity('PRODUCT-zzz')];
      const action = new CityLoaded(citys);
      const result: CityState = cityReducer(initialState, action);
      const selId: string = getCityId(result.list[1]);

      expect(result.loaded).toBe(true);
      expect(result.list.length).toBe(2);
      expect(selId).toBe('PRODUCT-zzz');
    });
  });

  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any;
      const result = cityReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
