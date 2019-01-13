import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

export const API_KEY = '4e5bf470747407bc2efca2047935164f';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  constructor(private http: HttpClient) { }

  getForecastByCityId(cityId: number) {

    return this.http
      .get(`http://api.openweathermap.org/data/2.5/weather?id=${cityId}&appid=${API_KEY}&_=${new Date().getTime()}&units=metric`)
      .pipe(
        map((item:any) => ({temperature: item.main.temp, city: item.name, iconCode: item.weather[0].id}))
      );
  }

}
