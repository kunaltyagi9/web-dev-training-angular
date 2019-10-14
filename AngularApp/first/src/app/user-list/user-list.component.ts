import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent implements OnInit {
  
  flag : boolean = true;
  inputValue : string;
  toggleShowHide : boolean = true;
  showHideDetails : boolean = false;
  showColumns : boolean = false;
  labelDetals : string;
  term : string;
  displayLabel : string;
  val  : string;
  public users = [];
  constructor(private _userService : UserService) { }

  disabled : boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.toggleShowHide = false;
    },3000);
    this.showColumns = true;
    this.toggleShowHide = true;
    this.getData();
  }


  getData(){
    this._userService.getUsers()
    .subscribe(data => this.users = data);
  }

  onkeyup(event){
    if(this.flag){
      this.flag = !this.flag;
    }   
    console.log(event);
    if(event === ""){
      this.showHideDetails = true;
      this.displayLabel = "please enter username";
      console.log(event);
    }else{
      this.showHideDetails = false;
    }   
     
  }

}
