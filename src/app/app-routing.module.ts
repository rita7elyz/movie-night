import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { HeaderComponent } from './header/header.component'
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'
import { ResultsComponent } from './results/results.component'
import { AuthguardService as AuthGuard } from './authguard.service';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'favorites', component: FavoritesComponent, canActivate: [AuthGuard]},
  { path: 'header', component: HeaderComponent, canActivate: [AuthGuard] },
  { path: 'home', component: HomeComponent, data:{requiresLogin: true}, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'results', component: ResultsComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: 'register', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
