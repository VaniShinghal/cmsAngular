import { Component, OnInit } from '@angular/core';
import { TrackService } from '../service/services/track.service';
import Swal from 'sweetalert2';
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
      console.log(resp);
      Swal.fire(
            { icon: 'success',
             title: 'Success!',
             text: resp.description
            })
    },(error:any)=>{
      console.log(error);
      
      Swal.fire(
            { icon: 'error',
             title: 'Invalid Details!',
             text: error.error.message
            })
      //throw new CustomError("Invalid Claim Details");
    }
    
    )
  }
}
