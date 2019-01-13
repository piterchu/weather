import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NavbarItemComponent } from './navbar-item/navbar-item.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [NavbarComponent, NavbarItemComponent],
  exports: [NavbarComponent, NavbarItemComponent]
})
export class SharedComponentsModule {}
