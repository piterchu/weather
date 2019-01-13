import 'jest-preset-angular';
import { ChangeDetectorRef } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PreferenceService } from '@weather/shared-services';
import { ForecastService } from '../services/forecast.service';
import { WeatherCardComponent } from '../weather-card/weather-card.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HomeComponent, WeatherCardComponent],
      providers: [
        ChangeDetectorRef,
        { provide: ForecastService, useValue: {} },
        {
          provide: PreferenceService,
          useValue: {
            getSelectedCities: () => {},
            setSelectedCities: () => {}
          }
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
