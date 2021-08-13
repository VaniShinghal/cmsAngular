import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  constructor(public data:LoginService) { }

  ngOnInit(): void {
    console.log("lol++",this.data.getTrack());
    
  }

}
