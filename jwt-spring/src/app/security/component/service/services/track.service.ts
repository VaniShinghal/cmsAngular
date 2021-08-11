import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {LoginService} from '../login.service';

@Injectable({providedIn: 'root'})export class TrackService {

    billUrl = "http://localhost:5001/view-bill/policy-id/";
    trackUrl = "http://localhost:5001/claim-status/claim-id/";
    constructor(private http : HttpClient) {}

    public generate(pid : String, mid : String) {
        this.billUrl = "http://localhost:5001/view-bill/policy-id/";
        this.billUrl = this.billUrl + mid + "/member-id/" + pid;
        return this.http.get(this.billUrl);
    }
    public statusGenerate(cid : String, pid : String, mid : String) {
        this.trackUrl = "http://localhost:5001/claim-status/claim-id/";
        this.trackUrl = this.trackUrl + cid + "/policy-id/" + mid + "/member-id/" + pid;
        return this.http.get(this.trackUrl);

    }
    public submitClaim(claim:any,token:string){
        return this.http.post("http://localhost:5002/"+"submit-claim",claim,{headers:new HttpHeaders({
          "Authorization":token
        })}).toPromise();
      }



    public getBillUrl() {
        return this.billUrl;
    }
    public getTrackUrl() {
        return this.trackUrl;

    }

}