import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  // Variables
  myStatus : any = "";

  constructor(private storage: Storage) { }
  
  ngOnInit() {
  }

  async ionViewWillEnter() { // Called every time the view is navigated to
  await this.storage.create();
  this.myStatus = await this.storage.get('status'); // Prints users saved food choice to the home menu (Data Persistence)
  }
  
}
