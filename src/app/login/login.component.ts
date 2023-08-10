import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../Services/usuario.service';
import {MatDialogModule} from '@angular/material/dialog';
import { Usuario } from 'src/app/models/usuario';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { SessionDataService } from '../utils/sessionDataServices';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 
  constructor(
 
    private usuService: UsuarioService,
   private dialog: MatDialogModule,
    private router: Router,
    private session: SessionDataService
  ) {

  }


  usu: Usuario=new Usuario({
     nombres:''
  });

  usu2: Usuario=new Usuario({
    nombres:''
 });



  form: FormGroup= new FormGroup({
    user: new FormControl('', [Validators.required]),
    pwd: new FormControl('', [Validators.required])
  });
  email: string="";
  password: string="";

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.form = new FormGroup({
      user: new FormControl('', [Validators.required]),
      pwd: new FormControl('', [Validators.required])
    });
  }
 
  login(


  ){

    this.validateUser(this.form.value.user, this.form.value.pwd);

  }


  private validateUser(user: string, pwd: string) {
    

    this.usu.userName=user;
    this.usu.pass=pwd;

    this.usuService.login(this.usu).subscribe(
      (result: any) => {
        
       console.log(result);
       if (result!=null) {

        this.usu2.userName=result['userName'];
        this.usu2.email=result['email'];
        this.usu2.nombres=result['nombres'];
        this.usu2.apellidos=result['apellidos'];

        this.session.putLoggedUser(this.usu2);

        this.router.navigate(['menu']);
       



       } else {
        Swal.fire(
          'Credenciales Incorrectas',
          
        )
       }

       } );
  }
}
