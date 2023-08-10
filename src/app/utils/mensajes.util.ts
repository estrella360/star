import { Injectable } from "@angular/core";
import Swal from 'sweetalert2';

@Injectable()
export class MessageUtil {
    static showSucessMessage(message: string){
        Swal.fire({
            icon: 'success',
            title: message,
            width: 400,
          });
    }

    static showAlertMessage(message: string){
        Swal.fire({
            icon: 'warning',
            title: message,
            width: 400,
          });
    }

    static showInfoMessage(message: string){
        Swal.fire({
            icon: 'info',
            title: message,
            width: 400,
          });
    }

    static showErrorMessage(message: string){
        Swal.fire({
            icon: 'error',
            title: message,
            width: 400,
          });
    }
}