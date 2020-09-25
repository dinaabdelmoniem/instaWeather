import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  data: any;
  constructor(private http: HttpClient) {}
  /**
   * get current location of the user to display city name
   */
  getMyLocation(): Observable<any> {
    return this.http.get('http://www.geoplugin.net/json.gp?jsoncallback');
  }
  /**
   * get weather according to lng , lat of user
   * @param lat lat of user's current position
   * @param lng lng of user's current position
   */
  getWeather(lat: any, lng: any): Observable<any> {
    return this.http.get(
      'https://api.darksky.net/forecast/a177f8481c31fa96c3f95ad4f4f84610/' +
        lat +
        ',' +
        lng
    );
  }
}
