import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.css']
})
export class SubmitClaimComponent implements OnInit {

  claimForm!:FormGroup;
  hospital:any[]=[];
  benefits:any[]=[];
  constructor(private service:LoginService) { }

  ngOnInit(): void {
    this.claimForm = new FormGroup({      
       claimId:new FormControl(''),
       claimStatus:new FormControl(''),
       remarks:new FormControl(''),
       memberId:new FormControl('',Validators.required),
       policyId:new FormControl('',Validators.required),
       hospitalId:new FormControl(''),
       benefitsId:new FormControl(''),
       claimedAmount:new FormControl(0.0),
       totalAmount:new FormControl(0.0),
    });
  }
  onchange(){
    if(this.claimForm.value.memberId!=''&&this.claimForm.value.policyId!=''){
      this.service.getProvider(this.claimForm.value.policyId).then((resp:any)=>{
        this.hospital=resp;
        this.service.getBenefit(this.claimForm.value.policyId,this.claimForm.value.memberId).then((res:any)=>{
          this.benefits=res.benefits;
        })
      });

    }
  }

  submit(){
    if(this.claimForm.valid){
      this.service.submitClaim(this.claimForm.value,String(localStorage.getItem("token"))).then(resp=>{
        console.log(resp);       
      }).catch(err=>{
        console.log(err);
      })
    }
  }




}
