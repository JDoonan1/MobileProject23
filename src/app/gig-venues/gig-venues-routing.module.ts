import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GigVenuesPage } from './gig-venues.page';

const routes: Routes = [
  {
    path: '',
    component: GigVenuesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GigVenuesPageRoutingModule {}
