import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

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
  public validate(token:String){
    return this.http.get("http://localhost:9000/validate",{headers:new HttpHeaders({"Authorization":("Bearer "+token)})})
  }
  public addHeader(url:string){
    return this.http.get(url,{headers:new HttpHeaders({"Authorization":("Bearer "+this.getToken())})});
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

  //form group for variables excanges
  trackDetails:any;
  public getTrack(){
    return this.trackDetails;
  }
  public setTrack(data:any){
    this.trackDetails=data;
  }
}
