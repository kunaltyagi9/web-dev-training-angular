import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Observable } from 'rxjs';
import { IUser } from '../user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  
  toggleShowHide : boolean = true;
  users$ : Observable<IUser[]>;

  constructor(private _userService : UserService) { }

  ngOnInit() {
    setTimeout(() => {
      this.toggleShowHide = false;
    },3000);
    this.toggleShowHide = true;
    this.users$ = this.getData();
  }

  getData() : Observable<IUser[]>{
    return this._userService.getUsers();
  }
}
