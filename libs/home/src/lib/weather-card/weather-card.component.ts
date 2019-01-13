import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'weather-weather-card',
  template: `
    <div>
      <div class="card">
        <div class="card-header">{{ city }}</div>
        <div class="card-body">

          <p class="card-text"><i class="wi wi-owm-{{iconCode}} icon"></i> {{ temperature }} °C</p>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./weather-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WeatherCardComponent {
  @Input() city: string;
  @Input() iconCode: number;
  @Input() temperature: number;
  @Input() unit: string;
}
