import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'gig-venues',
    loadChildren: () => import('./gig-venues/gig-venues.module').then( m => m.GigVenuesPageModule)
  },
  {
    path: 'galway-weather',
    loadChildren: () => import('./galway-weather/galway-weather.module').then( m => m.GalwayWeatherPageModule)
  },
  {
    path: 'irish-movies',
    loadChildren: () => import('./irish-movies/irish-movies.module').then( m => m.IrishMoviesPageModule)
  },
  {
    path: 'galway-food',
    loadChildren: () => import('./galway-food/galway-food.module').then( m => m.GalwayFoodPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
