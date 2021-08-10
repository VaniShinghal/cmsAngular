import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url="http://localhost:9000/authenticate";

  JWTURL="http://localhost:9000/";
  CLAIMURL="http://localhost:9000/";
  MEMBERURL="http://localhost:9000/"
  POLICYURL="http://localhost:9000/"


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
  public submitClaim(claim:any,token:string){
    return this.http.post(this.CLAIMURL+"submit-claim",claim,{headers:new HttpHeaders({
      "Authorization":token
    })}).toPromise();
  }

  public getClaimStatus(claimid:number,policyid:number,memberId:number){
    return this.http.get(this.CLAIMURL+"claim-status/claim-id/"+claimid+"/policy-id/"+policyid+"/member-id/"+memberId).toPromise();
  }

  //Member Microservice

  public submitMemberClaim(body:any,token:string){
    return this.http.post(this.MEMBERURL+"submit-claim",body,{headers:new HttpHeaders({
      "Authorization":token
    })}).toPromise();
  }

  public getMemberClaimStatus(claimid:number,policyid:number,memberId:number){
    return this.http.get(this.MEMBERURL+"claim-status/claim-id/"+claimid+"/policy-id/"+policyid+"/member-id/"+memberId).toPromise();
  }

  
  public viewBill(claimid:number,policyid:number,memberId:number){
    return this.http.get(this.MEMBERURL+"view-bill/policy-id/"+policyid+"/member-id/"+memberId).toPromise();
  }

  //Policy Microservice


  public getProvider(policyid:number){
    return this.http.get<any[]>(this.POLICYURL+"chain-of-providers/policy-id/"+policyid).toPromise();
  }

  
  public getBenefit(policyid:number,memberId:number){
    return this.http.get<any>(this.POLICYURL+"eligible-benefits/policy-id/"+policyid+"/member-id/"+memberId).toPromise();
  }

  public getClaimAmount(benefitid:number,policyid:number,memberId:number){
    return this.http.get<any>(this.POLICYURL+"eligible-claim-amount/policy-id/"+policyid+"/member-id/"+memberId+"/benefit-id/"+benefitid).toPromise();
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
  trackDetails!:any;
  public getTrack(){
    return this.trackDetails;
  }
  public setTrack(data:any){
    this.trackDetails=data;
  }
}
