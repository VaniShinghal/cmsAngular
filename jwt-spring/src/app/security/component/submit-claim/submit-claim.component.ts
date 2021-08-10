import { Component, OnInit } from '@angular/core';

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


  constructor() { }

  ngOnInit(): void {
  }
  submit(){
    console.log(this.details);
    
  }
}
