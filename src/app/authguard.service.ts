import { Injectable } from '@angular/core';
import { Router, CanActivate, CanDeactivate } from '@angular/router';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(public router: Router, public _userService: UserService) { }
  
  canActivate(): boolean {
    if (!this._userService.isLoggedIn) {
      this.router.navigate(['login']);
      alert("Please login or register to access your favorite movies and to search movie titles.")
      return false;
    }
    return true;
  }
}
