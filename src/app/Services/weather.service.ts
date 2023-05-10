import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class WeatherService {

  constructor(private http:HttpClient) { 
    console.log('Weather service running.')
  }
 
  getWeatherData() : Observable<any>{ // Retrieves weather data using http client to read in JSON from URL below
  return this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Galway&APPID=32a9066287bc812df125b2c276c6270a");
  }
}
