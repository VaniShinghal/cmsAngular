import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9000/authenticate";
  constructor(private http:HttpClient) { }
  public generate(request: any){
        return this.http.post(this.url,request,{responseType:"text" as "json"});
      }
    }