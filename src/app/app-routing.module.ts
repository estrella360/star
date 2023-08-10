import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';


const routes: Routes = [
  { path: 'menu',
  component: MenuComponent,
  
 children:[
  {  path: 'mensajes', component: MensajesComponent },
  {  path: 'mensajes/:id', component: MensajesComponent},  

 ]
}, 

  
  {  path: 'login', component: LoginComponent  },
  {  path: 'registrar', component: RegistrarComponent  },
  {  path: 'recuperar', component: RecuperarComponent  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
