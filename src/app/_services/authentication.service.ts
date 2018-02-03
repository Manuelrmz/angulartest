import {Injectable} from '@angular/core';
import {Http, Headers, Response, RequestOptions} from '@angular/http';
//import {HttpModule} from '@angular/http';
import {Observable,Observer} from 'rxjs';
import 'rxjs/add/operator/map';
@Injectable()
export class AuthenticationService{
  public token:string;
  constructor(private http : Http){
    //set token if saved in local localStorage
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    //try with || and &&
    this.token = currentUser && currentUser.token;
  }
  login(username:string,password:string) : Observable<boolean>{
    return this.http.post('http://localhost/actividadesc4/usuarios/login',{username: "",password:""}).map((response:Response) => {
      console.log("Hola 2");
      console.log(response);
      return false;
    });
    // return this.http.post('/api/authenticate',JSON.stringify({username:username,password:password})).map((response: Response)=>{
    //   let token = response.json() && response.json().token;
    //   if(token){
    //     //set token property
    //     this.token = token;
    //     //store username and jwt token in local storage
    //     //localStorage.setItem('currentUser',JSON.stringify({username:username,token:token}));
    //     return false;
    //   }
    //   else
    //   {
    //     //return false to indicate that the login process failed
    //     return false;
    //   }
    // });
  }
  logout():void{
    this.token = null;
    localStorage.removeItem('currentUser');
  }
}
