import { Component, OnInit } from '@angular/core';
import { CustomError } from '../../Error-Handling/Customerror';
import { LoginService } from '../service/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials={
    username:"",
    password:""
  }
  constructor(private loginService:LoginService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.credentials.username);
    if(this.credentials.password!="" && this.credentials.username!=""&&this.credentials.password!=null && this.credentials.username!=null){
      console.log("form submitted");
      this.loginService.generateToken(this.credentials).subscribe(
        (response:any)=>{
          console.log(response);
          var ll=response;
          ll=ll.slice(8,-2);
          this.loginService.loginUser(ll);
          window.location.href="/home";
        },
        error=>{
          console.log(error);
          Swal.fire(
            { icon: 'error',
             title: 'Oops...',
              text: 'Something went wrong!',
            })
        }
      );
  
      
      
    }
    else{
      console.log("Fields are empty");
    }
    
  }

}
