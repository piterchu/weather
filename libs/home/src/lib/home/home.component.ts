import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { City, PreferenceService } from '@weather/shared-services';
import { from } from 'rxjs';
import { mergeMap } from 'rxjs/operators';
import { ForecastService } from '../services/forecast.service';

@Component({
  selector: 'weather-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  foreCasts = [];

  currentSettings: City[];

  constructor(
    private forecastService: ForecastService,
    private preferenceService: PreferenceService,
    private changeDetectorRef: ChangeDetectorRef
  ) {
    this.currentSettings = this.preferenceService.getSelectedCities() || [];
  }

  ngOnInit(): void {
    from(this.currentSettings)
      .pipe(
        mergeMap((city: City) =>
          this.forecastService.getForecastByCityId(city.code)
        )
      )
      .subscribe(res => {
        this.foreCasts.push(res);
        this.changeDetectorRef.markForCheck();
      });
  }

  hasWidgets() {
    return this.foreCasts.length > 0;
  }
}
