import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GalwayFoodPageRoutingModule } from './galway-food-routing.module';
import { GalwayFoodPage } from './galway-food.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GalwayFoodPageRoutingModule
  ],
  declarations: [GalwayFoodPage]
})
export class GalwayFoodPageModule {}
