import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-gig-venues',
  templateUrl: './gig-venues.page.html',
  styleUrls: ['./gig-venues.page.scss'],
})

export class GigVenuesPage implements OnInit {
  // Variables
  coordinates: any = "";
  lat: string = "";
  long: String = "";

  constructor() { }

  async getGPS() { // Retrieves users GPS coordinates (long, latitude)
  this.coordinates = await Geolocation.getCurrentPosition();
  this.lat = this.coordinates.coords.latitude; 
  this.long = this.coordinates.coords.longitude;
  }

  async openBrowser() {  // Opens browser link for users to find live gigs
    await Browser.open({ url: 'https://www.galwaytourism.ie/live-gigs/' });
    };
  
  ngOnInit() {
  }

}
