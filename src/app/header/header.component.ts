import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service'
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { MovieService } from '../movie.service';
import { FavoritesService } from '../favorites.service'

export interface ApiResponse {
  results: []
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  data = [];
  searchInput= '';

  constructor(public _api : ApiService, 
    public router: Router, 
    private _movieService : MovieService, 
    private _favoritesService: FavoritesService,
    private _userservice: UserService) { }

  ngOnInit() {
    this._userservice.getUser()
  }

  onClick(){
    this._api.getSearch(this.searchInput).subscribe((response : ApiResponse ) => {
      this._movieService.movies = response.results
      this.goToResults()
    })
  }

  goToResults(){
    this.router.navigate(['/results'])
  }

  clickGetFavorites(){
    this._favoritesService.getFavorites()
    this.router.navigate(['/favorites'])
  }

  goToHome(){
    this.router.navigate(['/home'])
  }

  logOut(){
    sessionStorage.clear();
  }

}
