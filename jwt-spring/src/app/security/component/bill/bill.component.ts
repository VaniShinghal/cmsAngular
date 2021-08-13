import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomError } from '../../Error-Handling/Customerror';
import { LoginService } from '../service/login.service';
import { TrackService } from '../service/services/track.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.css']
})
export class BillComponent implements OnInit {

trackDetails!:FormGroup;
  constructor(private service:TrackService,private data:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.data.validate(String(this.data.getToken())).subscribe(
        (resp:any)=>{
          console.log(resp.validStatus);
        },
        (error:any)=>{
          console.log(error);
          throw new CustomError("Token Id Invalid");
          
        }
        
    );
    this.trackDetails=new FormGroup({
      mid:new FormControl(""),
      pid:new FormControl("")
    });
  }
  process(){
    
    console.log("the values ",this.trackDetails.value);
    if(this.trackDetails.valid){
      this.service.generate(this.trackDetails.value.mid,this.trackDetails.value.pid,String(this.data.getToken())).subscribe(
        (resp:any)=>{
          this.router.navigateByUrl('/viewbill');
          console.log("The response   ", resp);
          this.data.setTrack(resp);

        },
        (error:any)=>{
          console.log(error);
          Swal.fire(
            { icon: 'error',
             title: 'Invalid Details!',
            })
          //throw new CustomError("Invalid Details");
        }
      );
      console.log(this.service.getBillUrl());
      
     
      console.log("Ended");
    }
    
  }
}
