import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GigVenuesPageRoutingModule } from './gig-venues-routing.module';
import { GigVenuesPage } from './gig-venues.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GigVenuesPageRoutingModule
  ],
  declarations: [GigVenuesPage]
})
export class GigVenuesPageModule {}
