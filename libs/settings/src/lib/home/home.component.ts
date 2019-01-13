import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { cities, City, PreferenceService } from '@weather/shared-services';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  selectedCities: City[] = [];

  cities: City[] = [...cities];

  model;

  constructor(public preferenceService: PreferenceService) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.selectedCities = this.preferenceService.getSelectedCities() || [];
    this.cities = this.cities.filter(
      city =>
        this.selectedCities.find(item => item.code === city.code) === undefined
    );
  }

  onChange($event) {
    this.selectedCities = [
      ...this.selectedCities,
      $event
    ];
    this.preferenceService.setSelectedCities(this.selectedCities);
    this.cities.splice(this.cities.indexOf($event), 1);
  }

  onItemRemoved(city: City) {
    this.selectedCities.splice(this.selectedCities.indexOf(city), 1);
    this.cities.push(city);
    this.preferenceService.setSelectedCities(this.selectedCities);
  }
}
