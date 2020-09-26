import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { weather } from './mocks/weatherMock';
import { WeatherService } from './services/weather.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [WeatherService],
      imports: [HttpClientTestingModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  });

  beforeEach(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.weather = weather;
    app.showCTemp = false;
    app.showHome = true;
    app.city = '';
    fixture.detectChanges();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'INSTAWEATHER'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('INSTAWEATHER');
  });
});
