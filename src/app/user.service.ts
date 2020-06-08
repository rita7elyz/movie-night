import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl: string 
  appUserUrl: string
  mySessionId: string
  mySessionToken: string
  sessionIdUrl: string
  accessTokenUrl: string
  isLoggedIn : boolean = false;
  firstName: string;
  lastName: string;
  email: string;

  constructor(private _http: HttpClient) { }



  registerUser(userCredentials){
    this.baseUrl = "http://localhost:3000/api/"; 
    this.appUserUrl = "appUsers"
    return this._http.post(`${this.baseUrl}${this.appUserUrl}`, userCredentials);
  }

  logInUser(userCredentials){
    this.baseUrl = "http://localhost:3000/api/"; 
    this.appUserUrl = "appUsers"
    return this._http.post(`${this.baseUrl}${this.appUserUrl}/login`, userCredentials)
  }

  getUser(){
    this.mySessionId = `/${sessionStorage.getItem('userId')}`;
      this.mySessionToken = `${sessionStorage.getItem('token')}`;
      this.baseUrl = "http://localhost:3000/api/"; 
      this.appUserUrl = "appUsers"
      this.sessionIdUrl = `/${this.mySessionId}`
      this.accessTokenUrl = `?access_token=${this.mySessionToken}`
    return this._http.get(`${this.baseUrl}${this.appUserUrl}${this.sessionIdUrl}${this.accessTokenUrl}`)
    .subscribe((res: any)=> {
      console.log("res:", res)
      this.firstName = res.firstName;
      this.lastName = res.lastName;
      this.email = res.email;
    }
    
    )
  }
}


