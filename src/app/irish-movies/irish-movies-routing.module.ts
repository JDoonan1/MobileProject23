import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IrishMoviesPage } from './irish-movies.page';

const routes: Routes = [
  {
    path: '',
    component: IrishMoviesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IrishMoviesPageRoutingModule {}
