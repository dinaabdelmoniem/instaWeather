import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';
import { weather } from './mocks/weatherMock';
import {Weather} from './models/weather';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'INSTAWEATHER';
  weather: Weather;
  city = '';
  showHome = false;
  showCTemp = false;
  constructor(private weatherServ: WeatherService) {
    this.getWeather();
    this.getMyLocation();
  }
  ngOnInit(): void {

  }
  /**
   * get weather accordding to user's location
   */
  getWeather(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherServ
        .getWeather(position.coords.latitude, position.coords.longitude)
        .subscribe(
          (data) => {
            this.weather = data;
            this.showHome = true;
          },
          (err) => {
            /**
             * in case of error using mock Data
             */
            this.showHome = true;
            this.weather = weather;
          }
        );
    });
  }
  /**
   * get user current city
   */
  getMyLocation(): void {
    this.weatherServ.getMyLocation().subscribe((data) => {
      this.city = data.geoplugin_city;
    });
  }
}
