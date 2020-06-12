  import { Injectable } from '@angular/core';
  import { HttpClient } from '@angular/common/http'
  import { Router } from '@angular/router';


  @Injectable({
    providedIn: 'root'
  })

  export class FavoritesService {

    constructor(public _http : HttpClient, public router: Router) { }

    mySessionId: string
    mySessionToken: string
    baseUrl: string 
    appUserUrl: string
    sessionIdUrl: string
    accessTokenUrl: string

    isLoggedIn : boolean = true; 

    favorites: any[] = [];

    addToFavorites(movieInfo){
      this.mySessionId = `/${sessionStorage.getItem('userId')}`;
      this.mySessionToken = `${sessionStorage.getItem('token')}`;
      this.baseUrl = "http://localhost:3000/api/"; 
      this.appUserUrl = "appUsers"
      this.sessionIdUrl = `/${this.mySessionId}`
      this.accessTokenUrl = `?access_token=${this.mySessionToken}` 
      let data = {
        title : movieInfo.title,
        thirdPartyMovieId : movieInfo.thirdPartyMovieId,
        overview : movieInfo.overview,
        poster_path : movieInfo.poster_path 
      }
      
      //  also data is Title from Movie
      this._http.post(`${this.baseUrl}${this.appUserUrl}${this.sessionIdUrl}/movies${this.accessTokenUrl}`, data)
      .subscribe((res)=>{
      })
    }

    
    getFavorites(){
      this.mySessionId = `/${sessionStorage.getItem('userId')}`;
      this.mySessionToken = `${sessionStorage.getItem('token')}`;
      this.baseUrl = "http://localhost:3000/api/"; 
      this.appUserUrl = "appUsers"
      this.sessionIdUrl = `/${this.mySessionId}`
      this.accessTokenUrl = `?access_token=${this.mySessionToken}` 
      return this._http.get(`${this.baseUrl}${this.appUserUrl}${this.sessionIdUrl}/movies${this.accessTokenUrl}`)
      .subscribe((res: any) => {
        this.favorites = res
      },
      (error: any) => {
        console.log(error)
      },
      
      )

      
    }

    removeFave(favoriteMovie){
      this.mySessionId = `/${sessionStorage.getItem('userId')}`;
      this.mySessionToken = `${sessionStorage.getItem('token')}`;
      this.baseUrl = "http://localhost:3000/api/"; 
      this.appUserUrl = "appUsers"
      this.sessionIdUrl = `${this.mySessionId}`
      this.accessTokenUrl = `?access_token=${this.mySessionToken}` 
      return this._http.delete(`${this.baseUrl}${this.appUserUrl}${this.sessionIdUrl}/movies/${favoriteMovie}${this.accessTokenUrl}`)
      .subscribe((res: any) => {
        this.getFavorites()
      }
      )
      
      
      // DELETE /appUsers/{id}/favorites/{fk}
    }

  }

