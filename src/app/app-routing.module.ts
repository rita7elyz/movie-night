import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ResultsComponent } from './results/results.component'



const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavoritesComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'home', component: HomeComponent, data:{requiresLogin: true} },
  { path: 'login', component: LoginComponent },
  { path: 'results', component: ResultsComponent },
  // { path: '', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
