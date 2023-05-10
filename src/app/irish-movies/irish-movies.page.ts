import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-galway-events',
  templateUrl: './irish-movies.page.html',
  styleUrls: ['./irish-movies.page.scss'],
})

export class IrishMoviesPage {
  // Variables
  myMovies :any[] = [];

  constructor(private http:HttpClient) { }
  
  ionViewWillEnter(){ // Called every time the view is navigated to
    this.getGigsdata().subscribe(data =>{
        this.myMovies = data.Search;
      } 
    );
  }

  // Example of retrieving data within the class itself, rather than using a service
  getGigsdata():Observable<any>{  // Retrieves irish movie data using http client to read in JSON from URL below
    return this.http.get('https://www.omdbapi.com/?apikey=2ee2ed84&s=%27ireland%27')
  }
 
}
