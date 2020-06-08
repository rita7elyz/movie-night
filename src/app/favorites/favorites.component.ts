import { Component, OnInit } from '@angular/core';
import { FavoritesService } from '../favorites.service'
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private _favoritesService: FavoritesService, public _http : HttpClient) { }

  ngOnInit() {
    
  }
  
  removeFromFavorites(data){
    this._favoritesService.removeFave(data)
    alert("successfully removed from favorites");
  }

}
