import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { cities, City, cityQuery, PreferenceService } from '@weather/shared-services';
import { Observable } from 'rxjs';
import { AddCity, fromCityActions } from '../../../../shared-services/src/lib/+state/city.actions';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  selectedCities: Observable<City[]> = this.store.pipe(select(cityQuery.getAllCity));

  cities: City[] = [...cities];

  model;

  constructor(public preferenceService: PreferenceService,
              private store: Store<any>) {}

  ngOnInit() {
    this.initData();
  }

  initData() {
//    this.selectedCities = this.preferenceService.getSelectedCities() || [];
//    this.cities = this.cities.filter(
//      city =>
//        this.selectedCities.find(item => item.code === city.code) === undefined
//    );
  }

  onChange($event) {
    this.store.dispatch(new AddCity($event));
//    this.preferenceService.setSelectedCities(this.selectedCities);
    this.cities.splice(this.cities.indexOf($event), 1);
  }

  onItemRemoved(city: City) {
    this.store.dispatch(new fromCityActions.RemoveCity(city));
//    this.selectedCities.splice(this.selectedCities.indexOf(city), 1);
    this.cities.push(city);
//    this.preferenceService.setSelectedCities(this.selectedCities);
  }
}
