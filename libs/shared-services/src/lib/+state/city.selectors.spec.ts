import { Entity, CityState } from './city.reducer';
import { cityQuery } from './city.selectors';

describe('City Selectors', () => {
  const ERROR_MSG = 'No Error Available';
  const getCityId = it => it['id'];

  let storeState;

  beforeEach(() => {
    const createCity = (id: string, name = ''): Entity => ({
      id,
      name: name || `name-${id}`
    });
    storeState = {
      city: {
        list: [
          createCity('PRODUCT-AAA'),
          createCity('PRODUCT-BBB'),
          createCity('PRODUCT-CCC')
        ],
        selectedId: 'PRODUCT-BBB',
        error: ERROR_MSG,
        loaded: true
      }
    };
  });

  describe('City Selectors', () => {
    it('getAllCity() should return the list of City', () => {
      const results = cityQuery.getAllCity(storeState);
      const selId = getCityId(results[1]);

      expect(results.length).toBe(3);
      expect(selId).toBe('PRODUCT-BBB');
    });

    it('getSelectedCity() should return the selected Entity', () => {
      const result = cityQuery.getSelectedCity(storeState);
      const selId = getCityId(result);

      expect(selId).toBe('PRODUCT-BBB');
    });

    it("getLoaded() should return the current 'loaded' status", () => {
      const result = cityQuery.getLoaded(storeState);

      expect(result).toBe(true);
    });

    it("getError() should return the current 'error' storeState", () => {
      const result = cityQuery.getError(storeState);

      expect(result).toBe(ERROR_MSG);
    });
  });
});
