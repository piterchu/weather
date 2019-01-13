import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'weather-navbar-item',
  templateUrl: './navbar-item.component.html',
  styleUrls: ['./navbar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarItemComponent {
  @Input() uri: string;
}
