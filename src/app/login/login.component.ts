import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { UserService } from '../user.service'

interface LoginResponse {
  id: string;
  firstName: string;
  userId: string;
  email: string;
  password: string;
  token: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router : Router, private _userService : UserService) { }

  ngOnInit() {
  }

  form = {
    email: '',
    password: ''
  }

  logIn(){
    this._userService.logInUser(this.form).subscribe( (res: LoginResponse)=> {
      sessionStorage.setItem('token', res.token);
      sessionStorage.setItem('userId', res.userId);
      this._userService.firstName = res.firstName;
      this._userService.isLoggedIn = true;
      this.goToDash();
    })    
  }

  goToRegister(){
    this.router.navigate(['/register'])
  }

  goToDash(){
    this.router.navigate(['/home'])
  }
}

