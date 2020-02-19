import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submittedFalse = false;

  message : string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth : AuthenticationService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

  }
  

  login(){
    
    if(this.loginForm.value.username === 'admin' && this.loginForm.value.password === 'admin'){
      this.auth.setUsername(this.loginForm.value.username);
      this.router.navigate(['/home']);
      this.message = this.loginForm.value.username;
    }else{
      this.submittedFalse = true;
    }
  }


}
