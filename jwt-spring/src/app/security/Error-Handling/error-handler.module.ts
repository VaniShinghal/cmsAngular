import { ErrorHandler, Injectable } from "@angular/core";
import { CustomError } from "./Customerror";


@Injectable()
export class GlobalErrorHandler implements ErrorHandler{

    constructor(){}

    handleError(error: Error): void {
        
        if(error instanceof CustomError){
        alert(error.message);
    }
    }

}