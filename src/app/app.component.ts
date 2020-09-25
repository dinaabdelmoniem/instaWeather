import { Component, OnInit } from '@angular/core';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'INSTAWEATHER';
  weather: object = {};
  city = '';
  showCTemp = false;
  constructor(private weatherServ: WeatherService) {}
  ngOnInit(): void {
    this.getWeather();
    this.getMyLocation();
  }
  /**
   * get weather accordding to user's location
   */
  getWeather(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      this.weatherServ
        .getWeather(position.coords.latitude, position.coords.longitude)
        .subscribe((data) => {
          this.weather = data;
        });
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
