import 'jest-preset-angular';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { NavbarItemComponent } from './navbar-item.component';

@Component({
  selector: 'weather-test-component',
  template: `<weather-navbar-item [uri]="test">TEST ME</weather-navbar-item>`
})
class TestComponent  {}

describe('NavbarItemComponent', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComponent, NavbarItemComponent ],
      schemas: [NO_ERRORS_SCHEMA]
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

  it('should set the correct label', () => {
    const debugElement = fixture.debugElement.query(By.css('a'));
    expect(debugElement.nativeElement.textContent).toEqual('TEST ME');

  });
});
