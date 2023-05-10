import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IrishMoviesPageRoutingModule } from './irish-movies-routing.module';
import { IrishMoviesPage } from './irish-movies.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IrishMoviesPageRoutingModule
  ],
  declarations: [IrishMoviesPage]
})
export class IrishMoviesPageModule {}
