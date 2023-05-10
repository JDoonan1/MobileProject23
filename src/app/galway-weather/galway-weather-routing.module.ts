import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalwayWeatherPage } from './galway-weather.page';

const routes: Routes = [
  {
    path: '',
    component: GalwayWeatherPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalwayWeatherPageRoutingModule {}
