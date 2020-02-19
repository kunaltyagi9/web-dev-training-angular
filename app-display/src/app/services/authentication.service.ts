import { Injectable } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  username;

  constructor() { }


  setUsername(username) {
    this.username = username;
  }

  getUsername(){
    return this.username;
  }

  
}
