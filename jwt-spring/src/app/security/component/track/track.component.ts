import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CustomError } from '../../Error-Handling/Customerror';
import { LoginService } from '../service/login.service';
import { TrackService } from '../service/services/track.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackDetails!:FormGroup;
  constructor(private service:TrackService,private data:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.data.validate(String(this.data.getToken())).subscribe(
        (resp:any)=>{
          console.log(resp);
        },
        (error:any)=>{
          console.log(error);
          throw new CustomError("Invalid Token");
        }
        
    );
    this.trackDetails=new FormGroup({
      cid: new FormControl(""),
      mid:new FormControl(""),
      pid:new FormControl("")
    });
  }
  process(){
    
    console.log(this.trackDetails.value);
    if(this.trackDetails.valid){
    this.service.statusGenerate(this.trackDetails.value.cid ,this.trackDetails.value.mid, this.trackDetails.value.pid,String(this.data.getToken())).subscribe (

      (resp:any)=>{
          this.router.navigate(['/status']);
          console.log(resp);
          this.data.setTrack(this.trackDetails.value);
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
console.log(this.service.getTrackUrl());

      
this.data.addHeader(this.service.getTrackUrl()).subscribe((resp : any) => {

          console.log("res:",resp);
          this.data.setTrack(resp);
        },
        (error:any)=>{
          console.log(error);
        }
      );
      console.log("Ended");    
    } 
  }
}
