import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../_services/authentication.service';
@Component({
  moduleId:module.id,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model : any = {};
  loading = false;
  error = '';
  constructor(private AuthenticationService : AuthenticationService, private router : Router) { }

  ngOnInit() {
    //resent login status
    this.AuthenticationService.logout();
  }
  login(){
    this.loading = true;
    this.AuthenticationService.login(this.model.username,this.model.password).subscribe(result => {
      if(result === true)
      {
        this.router.navigate(['/']);
      }
      else{
        this.error = 'Username or Password is incorrect';
        this.loading = false;
      }
    })
  }

}
