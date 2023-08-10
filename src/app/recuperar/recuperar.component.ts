import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Usuario } from '../models/usuario';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
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
  
  });

  
  ngOnInit(): void {

    this.initForm();
  }

  user: string="";


  password: string="";

  private initForm() {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
   
    });
  }




  registrar(){
  
  this.registrarUser(this.form.value.user);
  
    }
  
  
  private registrarUser(user: string) {
      
  
      this.usu.userName=user;
     
  
      this.usuService.recuperar(user).subscribe(
        (result: any) => {
          
         console.log(result);
         Swal.fire(
          'Enviado Correctamente',
          
        )
        this.router.navigate(['login']);
  
         } );
    }

}
