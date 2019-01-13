import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CountrySelectorComponent } from './country-selector/country-selector.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
      { path: '', pathMatch: 'full', component: HomeComponent }
    ])
  ],
  declarations: [HomeComponent, CountrySelectorComponent]
})
export class SettingsModule {}
