import { inject, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { HttpClient } from '@angular/common/http';

describe('WeatherService', () => {
  let service: WeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient],
    });
  });
  beforeEach(() => {
    spyOn(HttpClient.prototype, 'get');
    service = TestBed.inject(WeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should call get My Location', inject(
    [WeatherService, HttpClient],
    (weatherService, http) => {
      weatherService.getMyLocation();
      expect(http.get).toHaveBeenCalled();
    }
  ));
  it('should call get Weather', inject(
    [WeatherService, HttpClient],
    (weatherService, http) => {
      weatherService.getWeather(30.3, 29.9);
      expect(http.get).toHaveBeenCalledWith(
        'https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/30.3,29.9'
      );
    }
  ));
});
