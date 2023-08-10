import { Component, HostListener, OnInit } from '@angular/core';
import 'scrollable-component';
import { ScrollableComponentElement } from 'scrollable-component';
import { AppModule } from '../app.module';
import { environment } from '../environments/environment.dev';
import { FacebookService, LoginResponse } from 'ngx-facebook';
import {ConversacionService} from '../Services/facebook.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

export interface message {
  id:string;
  message: string;
  to: {
    data:{
      email:string;
      id:string;
      name:string;
    }

  }
  
}
export interface user {
 
      email:string;
      id:string;
      name:string;
    

  
}

@Component({
  selector: 'app-mensajes',
  templateUrl: './mensajes.component.html',
  styleUrls: ['./mensajes.component.css']
})
export class MensajesComponent implements OnInit{
  constructor(private fb: FacebookService,
    private conversacionService: ConversacionService,
    private route: ActivatedRoute,
    private router: Router

    ) {
    
this.cargarMensajes();
this.mostrarMensajes();
   }
   ngOnInit(): void {
    this.initForm();
  }
   form: FormGroup= new FormGroup({
    mensajeEnviar: new FormControl('')
  });


  private initForm() {
    this.form = new FormGroup({
      mensajeEnviar: new FormControl('')
    });
  }
    mess:message[]=[
      {
        id:'',
  message: '',
  to: {
    data:{
      email:'',
      id:'',
      name:'',
    }

  }
      }]
      mensa2:any[]=[]; 
mensa:any[]=[];
   men:any;
   usuario1:any;
   usuario:user={ email:'',
   id:'',
   name:'',};

   MensajeEnviar: string="";
id: string | null='';
   ln: any = { email : '', id :  '' ,name : '',id2:''};
    mensajes:Array<any> =[];
    mensajes2:any[]=[];  

    mens: any = { name : '', mensaje :  '' ,hora : ''};

  items = Array.from({length: 100000}).map((_, i) => `Item #${i}`);

  color='#fffff';
  tiles: Tile[] = [
    {text: '', cols: 1, rows: 5, color: ''},
  

  ];

  cargarMensajes(): void {
 
     this.conversacionService.conversaciones().subscribe((result:any)=>
     {
   //   this.mensajes=result.data;
   for (let i = 0; i < result.data.length; i++) {
        
    this.conversacionService.conversaciones2(result.data[i].id).subscribe((result2:any)=>{
      console.log(result2.participants.data);
      this.ln = { email : '', id :  '' ,name : '',id2:''};
      this.ln.id=(result2.participants.data[0].id);
      this.ln.name=(result2.participants.data[0].name);
      this.ln.email=(result2.participants.data[0].email);
      this.ln.id2=(result.data[i].id);
      this.mensajes.push(this.ln);

    });
this.mensajes2=this.mensajes;
  
   }
   console.log(this.mensajes);
     });

    /*this.fb.api('/me')
.then(res => console.log(res))
.catch(e => console.log(e));*/
  }

  login() {
    this.fb.login()
      .then((res: LoginResponse) => {
        console.log('Logged in', res);
      })
      .catch(e => console.log(e));
  }
 
  mostrarMensajes(){
   
    if (this.route.snapshot.paramMap.get('id')!=null) {
      this.id=this.route.snapshot.paramMap.get('id');
      console.log(this.id);
      this.conversacionService.getMensajes(this.id).subscribe((result:any )=>{
       
        console.log(result);  
        this.mess=result.messages.data;
        for (let i = 0; i < this.mess.length; i++) {
          this.usuario1=this.mess[i].to.data;
          this.mens = { name : '', mensaje :  '' ,hora : ''};
          this.mens.mensaje=this.mess[i].message;
          console.log(this.usuario1);
          this.mens.name=this.usuario1[0]['name'];
          this.mensa.push(this.mens);
        }
      this.mensa2= this.mensa.reverse();
        console.log(this.mess);
        console.log(this.usuario);
        console.log(this.mensa);
       
      });


    }else{

    }
      
    

  }


  sendMensajes(){
    if (this.route.snapshot.paramMap.get('id')!=null) {
      this.id=this.route.snapshot.paramMap.get('id');
      this.conversacionService.getParticipant(this.id).subscribe((result:any )=>{

        console.log(result.participants.data[0].id);
        this.conversacionService.sendMensajes(this.id, this.form.value.mensajeEnviar,result.participants.data[0].id).subscribe((result2:any )=>{
       
          console.log(result2);
     
          
        
        });
      });


    }
    
  }


}
