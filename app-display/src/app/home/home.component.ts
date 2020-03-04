import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../services/data-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  users$;
  toggleShowHide : boolean = true;

  constructor(private _userService  : DataServiceService) { }

  ngOnInit() {
    this.getData();
  }

  getData(){
    
    this._userService.getUsers()
    .subscribe(
      data =>{
        this.toggleShowHide = false;    
        data = JSON.parse(JSON.stringify(data));
        this.users$ = data
      },
      error =>{
        this.toggleShowHide = false;
        alert("erorr getting response");
      }
    );

    if(this.users$){
      this.toggleShowHide = true;
    }
  }

}
