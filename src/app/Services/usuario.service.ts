import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../environments/environment.dev";
import { Usuario } from "../models/usuario";


let httpOption = {
    headers: new HttpHeaders({
        'Contend-type': 'application/json'
    })
}
const headers = new HttpHeaders().append(
  'Content-Type',
  'application/x-www-form-urlencoded'
);
let param = new HttpParams();





const body = {};
@Injectable({
    providedIn: 'root'
})
export class UsuarioService {

     
     url2: string="http://localhost:8090/"
    

     
    

    constructor(
        private _http: HttpClient,
      
    ) { }


    login(usuario:Usuario){
        return this._http.post<Usuario>(this.url2+"Usuario",usuario,httpOption);
    }

    insertar(usuario:Usuario){

        return this._http.post<Usuario>(this.url2+"Usuario/insertar",usuario,httpOption);
    }
    recuperar(usuario:string){
        param = param.set('nombreUsuario', usuario);
        return this._http.post<any>(this.url2+"Usuario/cambiarContraseña",param,httpOption);
    }

}

