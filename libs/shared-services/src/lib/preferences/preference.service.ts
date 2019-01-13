import { Injectable } from '@angular/core';
import { City } from '@weather/shared-services';

@Injectable({
  providedIn: 'root'
})
export class PreferenceService {
  getSelectedCities(): City[] {
    try {
      return JSON.parse(localStorage.getItem('weatherApp')) || [];
    } catch (e) {
      console.error('could not read weatherData from localStorage', e);
    }
  }

  setSelectedCities(cities: City[]) {
    localStorage.setItem('weatherApp', JSON.stringify(cities));
  }
}
