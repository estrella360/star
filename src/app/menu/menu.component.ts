import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../Services/usuario.service';
import { MatDialogModule } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { SessionDataService } from '../utils/sessionDataServices';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(
  private usuService: UsuarioService,
  private dialog: MatDialogModule,
   private router: Router,
   private session: SessionDataService
 ) {

 }
 user:any;
  ngOnInit(): void {
      this.user=this.session.getLoggedUser();
      
      console.log(this.user);
      if (this.user!=null) {
        
      }else{
       
        this.router.navigate(['login']);
      }
  }

  events: string[] = [];
  opened: boolean | undefined;

  shouldRun =true;

  cerrarSession(){
    this.session.removeLoggedUser();
    this.router.navigate(['login']);
  }
}
