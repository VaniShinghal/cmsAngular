import {Component, OnInit} from '@angular/core';
import { CustomError } from '../../Error-Handling/Customerror';
import { LoginService } from '../service/login.service';

@Component({selector: 'app-home', templateUrl: './home.component.html', styleUrls: ['./home.component.css']})
export class HomeComponent implements OnInit {

constructor(private data : LoginService) {}


    ngOnInit(): void {
        this.data.validate(String(this.data.getToken())).subscribe((resp : any) => {
            console.log(resp.validStatus);
        }, (error : any) => {
            console.log(error);
            throw new CustomError("Token Id Invalid");
        }
        );
    }
}
