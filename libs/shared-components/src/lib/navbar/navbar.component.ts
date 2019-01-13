import { Component } from '@angular/core';

@Component({
  selector: 'weather-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isToggled = false;

  toggleMenu() {
    this.isToggled = !this.isToggled;
  }
}
