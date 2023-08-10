import { EventEmitter, Injectable, Output } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class SessionDataService {
  @Output() fireIsLoggedIn: EventEmitter<boolean> = new EventEmitter<boolean>();
  static readonly USER_LOGGEDIN_ENTRY: string = 'USER_LOGGEDIN';
  
n:any;

  constructor() { }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }


  putLoggedUser(user: Usuario) {
    localStorage.setItem(SessionDataService.USER_LOGGEDIN_ENTRY, JSON.stringify(user));

    this.fireIsLoggedIn.emit(true);
  }

  getLoggedUser() {
    if (SessionDataService.USER_LOGGEDIN_ENTRY!=null) {
        this.n =localStorage.getItem(SessionDataService.USER_LOGGEDIN_ENTRY);
        return JSON.parse(this.n);

   
  }



}

removeLoggedUser() {
    localStorage.removeItem(SessionDataService.USER_LOGGEDIN_ENTRY);

    this.fireIsLoggedIn.emit(false);
  }

}
    

