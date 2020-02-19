import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private _url : string = 'https://jsonplaceholder.typicode.com/users';

  
  constructor(private _http : HttpClient) { }

  getUsers() : Observable<any>{
    return this._http.get<any>(this._url);
  }
}
