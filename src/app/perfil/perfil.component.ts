import { Component, OnInit } from '@angular/core';
import { Paciente } from '../Modelo/paciente';
import { DataApiService } from '../Services/data-api.service';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  nombre?: string="";
  direccion?: string="";
  correo?:string="";
  telf?: string ="";
  userName?:string="";
  password?:string="";
  
  user?:Paciente;
  public providerId: string='null';


  constructor(private userApi:DataApiService, private authService:AuthService) { }

  ngOnInit(){
    this.getCurrentUser();

  }

  getCurrentUser(){
    this.authService.isAuth().subscribe(auth=>{
      if(auth){
       // this.providerId=user.providerData[0].providerId
        this.nombre=auth.displayName;
        this.correo=auth.email;
        this.providerId=auth.uid;
        this.getDetails(this.providerId);
      }
    })
  }
  getDetails(idUser: string):void {
    this.userApi.getUser(idUser).subscribe(user=>{
      this.user=user;
    });
  }

}
