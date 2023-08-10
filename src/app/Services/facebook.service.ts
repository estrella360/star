import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/internal/Observable";
import { environment } from "../environments/environment.dev";


let httpOption = {
    headers: new HttpHeaders({
        'Contend-type': 'application/json'
    })
}
const headers = new HttpHeaders().append(
  'Content-Type',
  'application/x-www-form-urlencoded'
);

const body = {};
@Injectable({
    providedIn: 'root'
})
export class ConversacionService {

     url: string="https://graph.facebook.com/v17.0/"+environment.page+"/conversations?access_token="+environment.token
     url2: string="https://graph.facebook.com/v17.0/"
    

     
    

    constructor(
        private _http: HttpClient,
      
    ) { }

    conversaciones(){
        return this._http.get(this.url);
    }
    conversaciones2(id: string){
        return this._http.get(this.url2+id+"?fields=participants&access_token="+environment.token);
    }

    getMensajes(id: string | null){

        return this._http.get(this.url2+id+"?fields=messages{message,to}&access_token="+environment.token);
    }

    sendMensajes(id: string | null,mensaje:string,idCliente:string){
  
        const body = {};

        const params = new HttpParams()
            .append('recipient', '{id:'+id+'}')
            .append('messaging_type', 'RESPONSE')
            .append('message', '{"text":'+mensaje+'}')
          

        return this._http.post(this.url2+environment.page+"/messages?recipient=%7B%22id%22%3A"+idCliente+"%7D&messaging_type=RESPONSE&message=%7B%22text%22%3A%22"+mensaje+"%22%7D&access_token="+environment.token,body)}



    getParticipant(id: string | null){

        return this._http.get(this.url2+id+"?fields=participants&access_token="+environment.token);
    
        
    }


 

}

