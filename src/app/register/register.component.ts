import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service'

interface RegisterResponse {
  id: string;
  firstName: string;
  userId: string;
  token: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
  }
  
  form = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  signUp(){
    this._userService.registerUser(this.form).subscribe( (res: any )=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    })
  }

  goToLogin(){
    this.router.navigate(['/login'])
  }

  goToDash(){
    this.router.navigate(['/home'])
  }

}
