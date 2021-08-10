import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginService } from '../service/login.service';
import { TrackService } from '../service/services/track.service';

@Component({
  selector: 'app-track',
  templateUrl: './track.component.html',
  styleUrls: ['./track.component.css']
})
export class TrackComponent implements OnInit {
  trackDetails!:FormGroup;
  constructor(private service:TrackService,private data:LoginService) { }

  ngOnInit(): void {
    this.data.validate(String(this.data.getToken())).subscribe(
        (resp:any)=>{
          console.log(resp);
        },
        (error:any)=>{
          console.log(error);
          
        }
    );
    this.trackDetails=new FormGroup({
      mid:new FormControl(""),
      pid:new FormControl("")
    });
  }
  process(){
    console.log(this.trackDetails.value);
    if(this.trackDetails.valid){
      this.service.generate(this.trackDetails.value.mid,this.trackDetails.value.pid).subscribe(
        (resp:any)=>{
          console.log(resp);
          this.data.setTrack(this.trackDetails.value);
        },
        (error:any)=>{
          console.log(error);
          
        }
      );
    }
     
  }


}
