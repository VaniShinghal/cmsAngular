import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9000/authenticate";
  constructor(private http:HttpClient) { }

  //calling server to generate the token
  public generateToken(request: any){
        return this.http.post(this.url,request,{responseType:"text" as "json"});
      }
  
  //for login user
  loginUser(token:any){
    localStorage.setItem("token",token);
    return true;
  }

  //for getting the token
  getToken(){
    return localStorage.getItem("token");
  }


  //is logged in or not
  isLoggedIn(){
    return !!localStorage.getItem("token");
  }
  //logout
  logout(){
    localStorage.removeItem("token");
    return true;
  }
}
