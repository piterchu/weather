import 'jest-preset-angular';
import { TestBed } from '@angular/core/testing';

import { PreferenceService } from './preference.service';

describe('PreferenceService', () => {
  let service: PreferenceService;

  beforeEach(() => TestBed.configureTestingModule({}));

  beforeEach(()=>{
    service = TestBed.get(PreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should save the data to the localStorage', () => {
    const data = [{name: 'Montpellier', code: 1234, country: 'FR'}];
    const storageKey = 'weatherApp';
    jest.spyOn(Storage.prototype, 'setItem');

    service.setSelectedCities(data);

    expect(localStorage.setItem).toHaveBeenCalledWith(storageKey, JSON.stringify(data));
  });

  it('should return the data stored', () => {
    const expected = [{name: 'Montpellier', code: 1234, country: 'FR'}];
    jest.spyOn(Storage.prototype, 'getItem').mockReturnValue("[{\"name\":\"Montpellier\",\"code\":1234,\"country\":\"FR\"}]");

    expect(service.getSelectedCities()).toEqual(expected);
  });
});
