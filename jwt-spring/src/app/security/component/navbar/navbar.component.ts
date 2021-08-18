import { Component, OnInit } from '@angular/core';
import { LoginService } from '../service/login.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public loggedIn=false;
  
  constructor(private data:LoginService) { }
  
  ngOnInit(): void {
this.data.validate(String(this.data.getToken())).subscribe((resp : any) => {
            this.loggedIn=resp.validStatus;
        });

  }
  logoutUser(){
    this.data.logout();
    this.loggedIn=false;
  }

}
