
import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { WeatherService } from '../Services/weather.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-galway-weather',
  templateUrl: './galway-weather.page.html',
  styleUrls: ['./galway-weather.page.scss'],
})

export class GalwayWeatherPage {
  // Variables
  weather : any[] = [];
  temperature : any[] = [];
  pressure : any[] = [];
  humidity : any[] = [];
  seaLevel : any[] = [];
  
  constructor(private http: HttpClient, private wp: WeatherService, private navCtrl: NavController) { }

  goBack() { // Navigates user back to home page when back button is clicked (Event Binding)
    console.log('Navigating back to home page...');
    this.navCtrl.navigateBack('/home').then(() => {
      console.log('Navigation successful.');
    }).catch(error => {
      console.log('Navigation failed: ', error);
    });
  }

  ngOnInit() {
    // Reads in weather details json data using instance of WeatherService
    this.wp.getWeatherData().subscribe((data: any)=>{
      this.weather = data.weather;
      this.temperature = data.main.temp;
      this.pressure = data.main.pressure;
      this.humidity = data.main.humidity;
      this.seaLevel = data.main.sea_level;
    })
  }
}
