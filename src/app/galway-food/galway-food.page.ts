import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { NavController } from '@ionic/angular';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-galway-food',
  templateUrl: './galway-food.page.html',
  styleUrls: ['./galway-food.page.scss'],
})

export class GalwayFoodPage implements OnInit {
  // Variables
  myStatus:string ="";
  
  constructor(private storage: Storage, private navCtrl: NavController) { }

  async onSave(){ // Saves users preferred food type
    await this.storage.create();
    await this.storage.set("status", this.myStatus);
    console.log("Saving Food.");
    await this.navCtrl.navigateBack('/home'); // Navigates back to home page
  }

  async openBrowser() { // Opens browser link for users to find restaurants
    await Browser.open({ url: 'https://www.tripadvisor.ie/Restaurants-g186609-Galway_County_Galway_Western_Ireland.html' });
    };
    
  ngOnInit() {
  }
  
}
