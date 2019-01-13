import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent, NavbarItemComponent, SharedComponentsModule } from '@weather/shared-components';
import { AppComponent } from './app.component';

describe('AppComponent', () => {

  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedComponentsModule],
      declarations: [AppComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
  });

  it('should create the app', () => {
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have a navbar with two navigation items', () => {
    const debugElement = fixture.debugElement.query(By.directive(NavbarComponent));
    expect(debugElement).toBeTruthy();

    const navItems = fixture.debugElement.queryAll(By.directive(NavbarItemComponent));
    expect(navItems.length).toEqual(2);

    expect(navItems[0].nativeElement.textContent).toEqual('Home');
    expect(navItems[1].nativeElement.textContent).toEqual('Settings');

  });


});
