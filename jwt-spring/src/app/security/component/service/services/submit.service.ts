import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
<<<<<<< HEAD
export class SubmitService {
  url="http://localhost:9000/authenticate";
=======
export class LoginService {
  url="http://localhost:8090/authenticate";
>>>>>>> 056fddff2033d70d65ee060c11bc15e5dbc94274
  constructor(private http:HttpClient) { }
  public generate(request: any){
        return this.http.post(this.url,request,{responseType:"text" as "json"});
      }
    }