import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-view-bill',
  templateUrl: './view-bill.component.html',
  styleUrls: ['./view-bill.component.css']
})
export class ViewBillComponent implements OnInit {

  constructor(public data:LoginService,private router:Router) { }

  ngOnInit(): void {
    this.data.validate(String(this.data.getToken())).subscribe((resp : any) => {
            console.log(resp.validStatus);
            if(!resp.validStatus){
                this.data.logout();
            this.router.navigate(["/login"]);
            }
        }, (error : any) => {
            console.log(error);
            Swal.fire(
            { icon: 'info',
             title: 'Token Expired!',
             text: "Please Login Again"
            })
            this.data.logout();
            this.router.navigate(["/login"]);
        }
        );
    
  }

}
