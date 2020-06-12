import { Component } from '@angular/core';
import { UserService } from './user.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'final-project-front';


  constructor (private _userservice: UserService){}

    ngOnInit(){

    }

    loggedIn = this._userservice.isLoggedIn
     
  

  



}
