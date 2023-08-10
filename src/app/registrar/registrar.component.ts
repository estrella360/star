import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../Services/usuario.service';
import {MatDialogModule} from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  
  constructor(
 
    private usuService: UsuarioService,
   private dialog: MatDialogModule,
    private router: Router
  ) {

  }
  usu: Usuario=new Usuario({
    nombres:''
 });
  form: FormGroup= new FormGroup({
    user: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required]),
    nom: new FormControl('', [Validators.required]),
    app: new FormControl('', [Validators.required]),
    mail: new FormControl('', [Validators.required])
  });

  
  ngOnInit(): void {

    this.initForm();
  }

  user: string="";
  email: string="";
  app: string="";
  nom: string="";

  password: string="";

  private initForm() {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      app: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required])
    });
  }




  registrar(){
  
  this.registrarUser(this.form.value.user, this.form.value.pwd,this.form.value.app,this.form.value.nom,this.form.value.email);
  
    }
  
  
  private registrarUser(user: string, pwd: string,app : string, nom : string, mail: string) {
      
  
      this.usu.userName=user;
      this.usu.pass=pwd;
      this.usu.apellidos=app;
      this.usu.nombres=nom;
      this.usu.email=mail;
  
      this.usuService.insertar(this.usu).subscribe(
        (result: any) => {
          
         console.log(result);
         Swal.fire(
          'Registrado Correctamente',
          
        )
        this.router.navigate(['login']);
  
         } );
    }




}
