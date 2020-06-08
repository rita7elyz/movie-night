import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service'
import { ApiService } from '../api.service'

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(public _movieService : MovieService, private _favoritesService : FavoritesService, private _apiService: ApiService) { }

  ngOnInit() {}

  addToFavorites(data){
    this._favoritesService.addToFavorites(data)
    alert("successfully added to favorites");
  }

  
  
}
