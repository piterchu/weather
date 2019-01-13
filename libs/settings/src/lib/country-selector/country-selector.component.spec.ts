import 'jest-preset-angular';
import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { City } from '@weather/shared-services';

import { CountrySelectorComponent } from './country-selector.component';

@Component({
  template: `<weather-country-selector [cities]="cities" (removed)="onRemoved($event)"></weather-country-selector>`
})
class TestComponent{
  cities: City[] = [{name: 'A', code: 1, country: 'CA'}, {name: 'B', code: 2, country: 'CB'}];
  removedItem = {};
  onRemoved(value) {
    this.removedItem = value;
  }
}

describe('CountrySelectorComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountrySelectorComponent, TestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create 2 elements', () => {
    const debugElements = fixture.debugElement.queryAll(By.css('div'));
    expect(debugElements.length).toEqual(2);

    expect(debugElements[0].nativeElement.textContent).toContain('A');
    expect(debugElements[1].nativeElement.textContent).toContain('B');
  });

  it('should emit a remove event', () => {

    const button = fixture.debugElement.query(By.css('button'));
    button.triggerEventHandler('click', null);
    fixture.detectChanges();

    expect(component.removedItem).toEqual({name: 'A', code: 1, country: 'CA'});
  });
});
