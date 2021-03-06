import {Component, OnInit} from '@angular/core';
import {User} from '../_model/user';
import {UserService} from '../_services/user.service';

@Component({
  moduleId:module.id,
  templateUrl:'home.component.html'
})
export class HomeComponent implements OnInit{
  users : User[] = [];
  constructor(private userService: UserService){

  }
  ngOnInit(){
    this.userService.getUsers().subscribe(users => { this.users = users;});
  }
}
