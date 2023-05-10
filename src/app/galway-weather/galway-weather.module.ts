import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GalwayWeatherPageRoutingModule } from './galway-weather-routing.module';
import { GalwayWeatherPage } from './galway-weather.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalwayWeatherPageRoutingModule
  ],
  declarations: [GalwayWeatherPage]
})
export class GalwayWeatherPageModule {}
