import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
    }