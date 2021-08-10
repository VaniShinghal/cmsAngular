import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from '../login.service';

@Injectable({
  providedIn: 'root'
})
export class TrackService {

  url="http://localhost:5001/view-bill/policy-id/";
  
  constructor(private http:HttpClient) { }

  public generate(pid: String,mid:String){
        this.url=this.url+mid+"/member-id/"+pid;
        return this.http.get(this.url);
      }
  public getUrl(){
    return this.url;
  }
    }