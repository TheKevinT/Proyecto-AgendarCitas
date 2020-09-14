import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilComponent } from './perfil/perfil.component';
import { AgendarComponent } from './agendar/agendar.component';
import { EspecialistasComponent } from './especialistas/especialistas.component';
import { HistorialComponent } from './historial/historial.component';
import { HomeDocComponent } from './Doctores/home-doc/home-doc.component';
import { CitasDocComponent } from './Doctores/citas-doc/citas-doc.component';
import { RegistrarCitaDocComponent } from './Doctores/registrar-cita-doc/registrar-cita-doc.component';
import { HomeAdminComponent } from './Admin/home-admin/home-admin.component';
import { EditarDocComponent } from './Admin/editar-doc/editar-doc.component';
import { RegistrarDocComponent } from './Admin/registrar-doc/registrar-doc.component';
import { ServiciosComponent } from './servicios/servicios.component';



const routes: Routes = [
 {
    path:'',
    redirectTo:'/login',
    pathMatch:'full',
  },

  {path:'login',component:LoginComponent},
  {path:'home',component:HomeComponent},
  {path:'registro',component:RegistroComponent},
  {path:'perfil',component:PerfilComponent},
  {path:'agendarCita',component:AgendarComponent},
  {path:'especialistas',component:EspecialistasComponent},
  {path:'servicios',component:ServiciosComponent},
  {path:'historial',component:HistorialComponent},
 //{path:'**',component:HomeComponent} //manejar algo que no existe
  {path:'homeDoc',component:HomeDocComponent},
  {path:'citasDoc',component:CitasDocComponent},
  {path:'registrarCita/:id',component:RegistrarCitaDocComponent},

  //Admin

  {path:'homeAdmin',component:HomeAdminComponent},
  {path:'editarDoc/:id',component:EditarDocComponent},
  {path:'registrarDoc',component:RegistrarDocComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
