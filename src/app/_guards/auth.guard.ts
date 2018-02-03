import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }
  canActivate(){
    if(localStorage.getItem('currentUser')){
      //It means the user is logged
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}
