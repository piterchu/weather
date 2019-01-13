import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from '@weather/shared-components';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    NxModule.forRoot(),
    RouterModule.forRoot(
      [
        { path: 'settings', loadChildren: '@weather/settings#SettingsModule' },
        { path: 'home', loadChildren: '@weather/home#HomeModule' },
        { path: '',
          redirectTo: '/home',
          pathMatch: 'full'
        },
      ],
      { initialNavigation: 'enabled' }
    ),
    SharedComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
