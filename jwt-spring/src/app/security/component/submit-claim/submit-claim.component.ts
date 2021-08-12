import { Component, OnInit } from '@angular/core';
import { CustomError } from '../../Error-Handling/Customerror';
import { TrackService } from '../service/services/track.service';

@Component({
  selector: 'app-submit-claim',
  templateUrl: './submit-claim.component.html',
  styleUrls: ['./submit-claim.component.css']
})
export class SubmitClaimComponent implements OnInit {
  details = {
      policyId: "",
      claimId: "",
      memberId: "",
      hospitalId: "",
      benefitsId: "",
      totalAmount: "",
      claimedAmount: ""
  };


  constructor(private service:TrackService) { }

  ngOnInit(): void {
    
  }
  submit(){
    console.log(this.details);
    this.service.submitClaim(this.details,String(localStorage.getItem("token"))).subscribe((resp:any)=>{
      if(confirm(resp.description)){
      console.log(resp);
    }
    },(error:any)=>{
      
      throw new CustomError("Invalid Claim Details");
    }
    
    )
  }
}
