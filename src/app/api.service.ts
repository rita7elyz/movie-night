import { Injectable } from '@angular/core';
import { HttpClient }  from '@angular/common/http';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})


export class ApiService {
  apikey = environment.API_KEY
   
  constructor(public _http : HttpClient) {  }
  
  getSearch(queryItem) {
    return this._http.get(`https://api.themoviedb.org/3/search/movie?api_key=${this.apikey}&language=en-US&query=${queryItem}&page=1&include_adult=false`); 
  }
}
