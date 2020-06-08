import { Component } from '@angular/core';
import { ApiService } from './api.service';
import { Router } from '@angular/router';
import { MovieService } from './movie.service';
import { FavoritesService } from './favorites.service'
import { UserService } from './user.service'

export interface ApiResponse {
  results: []
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project-front';
  data = [];
  searchInput= '';

  constructor (public _api : ApiService, 
    public router: Router, 
    private _movieService : MovieService, 
    private _favoritesService: FavoritesService,
    private _userservice: UserService){}

    ngOnInit(){
      this._userservice.getUser()
    }
    
    
  onClick(){
    this._api.getSearch(this.searchInput).subscribe((response : ApiResponse ) => {
      console.log(response)
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
