import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  {
    path : "", redirectTo: "login" , pathMatch : "full"
  },
  {
    path : "login", component : LoginComponent
  },
  {
    path : "home", component : HomeComponent
  },
  {
    path : "contact", component : ContactComponent
  },
  {
    path : "about", component : AboutComponent 
  },
  {
    path : "**", component : HomeComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
