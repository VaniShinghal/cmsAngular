import { ErrorHandler, Injectable } from "@angular/core";
import Swal from "sweetalert2";
import { CustomError } from "./Customerror";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(){}

    handleError(error: Error): void {
        
        if(error instanceof CustomError){
            Swal.fire(
                { icon: 'error',
                 title: error.message,
                })
    }
    }

}