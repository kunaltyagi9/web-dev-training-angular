import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router'; 


@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  // 
  
  constructor(private router : Router){}

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
  //       this.login.getLoggedIn().subscribe((value) => {
  //         // console.log('value- ', value)
  //         if (value) {
  //           return true;
  //         }
  //         else {
  //           if (localStorage.getItem(loggedIn) === 'true') {
  //             console.log('test...');
  //             return true;
  //           }
  //           else {
  //             this.router.navigate(['/app-login'])
  //             return false;
  //           }
  //         }
  //       });
  //       return true;
  // }    
}
