import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { NgFor, NgIf } from '@angular/common';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { MensajesComponent } from './mensajes/mensajes.component';
import { MenuComponent } from './menu/menu.component';
import {MatListModule} from '@angular/material/list';
import {ScrollingModule} from '@angular/cdk/scrolling';
import { HttpClientModule } from '@angular/common/http';
import { FacebookService } from 'ngx-facebook';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { environment } from './environments/environment.dev';
import { LoginComponent } from './login/login.component';
import { RegistrarComponent } from './registrar/registrar.component';
import { RecuperarComponent } from './recuperar/recuperar.component';

@NgModule({
  declarations: [
    AppComponent,
    MensajesComponent,
    MenuComponent,
    LoginComponent,
    RegistrarComponent,
    RecuperarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    NgFor,
    NgIf,
    FormsModule,
    MatGridListModule,
    MatListModule,
    ScrollingModule,
    HttpClientModule,
  MatDividerModule,
  MatFormFieldModule,
  MatCardModule,
  FormsModule,
  ReactiveFormsModule,
  MatInputModule,
  MatDialogModule


    

    


  ],
  providers: [
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(private fb: FacebookService) {
    fb.init(environment.FB_CONFIG);
  }

}
