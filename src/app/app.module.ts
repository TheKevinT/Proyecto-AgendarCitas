import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgendarComponent } from './agendar/agendar.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { HistorialComponent } from './historial/historial.component';
import { HomeDocComponent } from './Doctores/home-doc/home-doc.component';
import { CitasDocComponent } from './Doctores/citas-doc/citas-doc.component';
import { RegistrarCitaDocComponent } from './Doctores/registrar-cita-doc/registrar-cita-doc.component';
import { NavDocComponent } from './Doctores/nav-doc/nav-doc.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { RegistrarDocComponent } from './Admin/registrar-doc/registrar-doc.component';
import { EditarDocComponent } from './Admin/editar-doc/editar-doc.component';
import { NavAdminComponent } from './Admin/nav-admin/nav-admin.component';
import { ServiciosComponent } from './servicios/servicios.component';

import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment';


import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/auth';
import { AuthService } from './Services/auth.service';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavComponent,
    HomeComponent,
    RegistroComponent,
    PerfilComponent,
    AgendarComponent,
    EspecialistasComponent,
    HistorialComponent,
    HomeDocComponent,
    CitasDocComponent,
    RegistrarCitaDocComponent,
    NavDocComponent,
    HomeAdminComponent,
    RegistrarDocComponent,
    EditarDocComponent,
    NavAdminComponent,
    ServiciosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [AngularFireAuth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
