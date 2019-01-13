import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { City } from '@weather/shared-services';

@Component({
  selector: 'weather-country-selector',
  templateUrl: './country-selector.component.html',
  styleUrls: ['./country-selector.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountrySelectorComponent {

  @Input() cities: City[];

  @Output() removed: EventEmitter<City> = new EventEmitter();

}
