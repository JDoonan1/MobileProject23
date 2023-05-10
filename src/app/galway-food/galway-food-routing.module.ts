import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalwayFoodPage } from './galway-food.page';

const routes: Routes = [
  {
    path: '',
    component: GalwayFoodPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GalwayFoodPageRoutingModule {}
