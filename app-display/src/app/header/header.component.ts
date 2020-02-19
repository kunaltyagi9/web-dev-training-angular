import { Component, OnInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username;

  constructor(private auth : AuthenticationService) { }

  ngOnInit(): void {
    this.username = this.auth.getUsername();    
    console.log(this.username);
  }


  

}
